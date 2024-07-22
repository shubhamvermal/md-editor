import { useContext, useEffect, useRef } from 'react'
import EditorContext from './context';
import React from 'react';
import { renderMarkdown } from './helper';

type EditorType = {
    style?: Record<string, string | number>;
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeyDown = (e: any) => {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
