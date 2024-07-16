import { useContext, useEffect, useRef } from 'react'
import EditorContext from './context';
import React from 'react';

type EditorType = {
    style?: any;
    className?: string;
    value?: string
    getMarkDown?: (markDown: string) => void
    onChange?: (value: string) => void
}

export function Editor(props: EditorType) {
    const { getMarkDown, onChange, style } = props
    const [state, setState] = useContext(EditorContext)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        setState({ ...state, str: props.value })
    }, [])

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            applyFormatting('**');
        } else if (e.ctrlKey && e.key === 'i') {
            e.preventDefault();
            applyFormatting('*');
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const applyFormatting = (syntax: any) => {
        const textarea = textareaRef.current;
        if (!textarea) {
            return
        }
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selectedText = state.str.substring(start, end);
        const beforeText = state.str.substring(0, start);
        const afterText = state.str.substring(end);

        const str = `${beforeText}${syntax}${selectedText}${syntax}${afterText}`
        setState({ ...state, str, html: renderMarkdown(str) })
        // Move cursor to the inside of the added syntax
        setTimeout(() => {
            textarea.selectionStart = start + syntax.length;
            textarea.selectionEnd = end + syntax.length;
            textarea.focus();
        }, 0);
    };


    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) {
            return
        }
        textarea.addEventListener('keydown', handleKeyDown);

        return () => {
            textarea.removeEventListener('keydown', handleKeyDown);
        };
    }, [state.str]);

    const handleChange = (e: any) => {
        const value = e.target.value;
        console.log("🚀 ~ file: editor.tsx:70 ~ handleChange ~ value:", { value })
        const html = renderMarkdown(value)
        onChange && onChange(e.target.value);
        getMarkDown && getMarkDown(html)

        setState({ ...state, str: value, html })
    }
    return (
        <div style={{ "marginBottom": "1rem", "borderRadius": "0.5rem", "borderWidth": "1px", "borderColor": "#E5E7EB", "width": "100%", "backgroundColor": "#F9FAFB", ...style }}>
            <textarea value={state.str} ref={textareaRef} onChange={handleChange} id="editor" placeholder="Write an article..." required style={{ height: "inherit", "display": "block", paddingLeft: "0 1rem", paddingRight: "0 1rem", "paddingTop": "0.5rem", "paddingBottom": "0.5rem", "borderWidth": "0", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "color": "#1F2937", "backgroundColor": "#ffffff", padding: "8px" }} ></textarea>
        </div>
    )
}

function escapeHtml(str: string) {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

const renderMarkdown = (text: string) => {
    // code editor
    // text = text.replace(/```(.*?)\n([\s\S]*?)```/gim, ' <div class="editor-container">$1<div class="editor" >$2</div></div>');
    // Replace code blocks with custom HTML structure
    text = text.replace(/```(.*?)\n([\s\S]*?)```/gim, function (match, lang, code) {
        return `<div class="editor-container">${lang}<div class="editor">${escapeHtml(code)}</div></div>`;
    });


    // Replace headers
    text = text.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    text = text.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    text = text.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    text = text.replace(/^---(.*$)/gim, '<hr/>');

    // Replace bold text
    text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Replace italic text
    text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // image
    text = text.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');
    // Replace links
    text = text.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');


    // block quote
    text = text.replace(/`([^`]+)`/gim, '<span style="background: #f9d69a; borderRadius: 7px; padding: 0 5px; fontSize: 14px;" >$1</span>');

    // Replace unordered list items
    text = text.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    text = text.replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>');

    // Replace line breaks with <br>
    text = text.replace(/\n$/gim, '<br>');

    text = text.replace(/((\r?\n){2}|^)(([^\r\n]*\|[^\r\n]*(\r?\n)?)+(?=(\r?\n){2}|$))/gm, (match) => {
        const [header, ...rows] = match.trim().split('\n');
        const headers = header.split('|').map(h => `<th>${h.trim()}</th>`).join('');
        const bodyRows = rows.map(row => {
            const cells = row.split('|').map(cell => `<td>${cell.trim()}</td>`).join('');
            return `<tr>${cells}</tr>`;
        }).join('');
        return `<table><thead><tr>${headers}</tr></thead><tbody>${bodyRows}</tbody></table>`;
    });



    return text;
};
