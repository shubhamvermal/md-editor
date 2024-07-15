import { useContext } from 'react'
import EditorContext from './context';
import React from 'react';

type EditorType = {
    style?: any;
    className?: string;
    value?: string
    getMarkDown?: (markDown: React.JSX.Element[]) => void
    onChange?: (value: string) => void
}

export function Editor(props: EditorType) {
    const { getMarkDown, onChange, style } = props
    const [state, setState] = useContext(EditorContext)

    // useEffect(()=>{
    // setState({...state, str: renderMarkdown(props.value)});
    // },[])

    const handleChange = (e: any) => {
        const value = e.target.value;
        const md = renderMarkdown(value)
        onChange && onChange(e.target.value);
        getMarkDown && getMarkDown(md)

        setState({ ...state, str: md })
    }
    return (
        <div style={{ "marginBottom": "1rem", "borderRadius": "0.5rem", "borderWidth": "1px", "borderColor": "#E5E7EB", "width": "100%", "backgroundColor": "#F9FAFB", ...style }}>
            <textarea defaultValue={props.value} onChange={handleChange} id="editor" placeholder="Write an article..." required style={{ height: "inherit", "display": "block", paddingLeft: "0 1rem", paddingRight: "0 1rem", "paddingTop": "0.5rem", "paddingBottom": "0.5rem", "borderWidth": "0", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "color": "#1F2937", "backgroundColor": "#ffffff", padding: "8px" }} ></textarea>
        </div>
    )
}


const renderMarkdown = (text: string) => {
    // Replace headers
    text = text.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    text = text.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    text = text.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Replace bold text
    text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Replace italic text
    text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Replace links
    text = text.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
    text = text.replace(/```(.*?)\n([\s\S]*?)```/gim, ' <div class="editor-container">$1<div class="editor" >$2</div></div>');
    text = text.replace(/`([^`]+)`/gim, '<span style="background: #f9d69a; borderRadius: 7px; padding: 0 5px; fontSize: 14px;" >$1</span>');

    // Replace unordered list items
    text = text.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    text = text.replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>');

    // Replace line breaks with <br>
    text = text.replace(/\n$/gim, '<br>');

    return text;
};

// const renderMarkdown = (text: string) => {
//     const lines = text.split('\n');
//     return lines.map((line, index) => {
//         if (line === "") {
//             return <br />
//         }
//         if (line === "----") {
//             return <hr />
//         }
//         if (line.startsWith('# ')) {
//             return <h1 key={index}>{line.substring(2)}</h1>;
//         }
//         if (line.startsWith('## ')) {
//             return <h2 key={index}>{line.substring(3)}</h2>;
//         }
//         if (line.startsWith('### ')) {
//             return <h3 key={index}>{line.substring(4)}</h3>;
//         }
//         if (line.startsWith('#### ')) {
//             return <h4 key={index}>{line.substring(5)}</h4>;
//         }
//         if (line.startsWith('##### ')) {
//             return <h5 key={index}>{line.substring(6)}</h5>;
//         }
//         if (line.startsWith('###### ')) {
//             return <h6 key={index}>{line.substring(7)}</h6>;
//         }
//         if (line.startsWith('- ')) {
//             return <ul key={index}><li>{line.substring(2)}</li></ul>;
//         }
//         if (line.startsWith('* ')) {
//             return <ul key={index}><li>{line.substring(2)}</li></ul>;
//         }
//         if (/`[A-Za-z0-9]+`/.test(line)) {
//             const parts = line.split('`');
            // return <p key={index}>{parts.map((part: any, i: number) => i % 2 === 0 ? part : <span style={{ background: "#f9d69a", borderRadius: "7px", padding: "0 5px", fontSize: "14px" }} key={i}>{part}</span>)}</p>;
//         }
//         if (/\*\*(.+)\*\*/.test(line)) {
//             const parts = line.split('**');
//             return <p key={index}>{parts.map((part: any, i: number) => i % 2 === 0 ? part : <strong key={i}>{part}</strong>)}</p>;
//         }
//         if (/\*(.+)\*/.test(line)) {
//             const parts = line.split('*');
//             return <p key={index}>{parts.map((part: any, i: number) => i % 2 === 0 ? part : <em key={i}>{part}</em>)}</p>;
//         }
//         if (/\[(.+)\]\((.+)\)/.test(line)) {
//             const parts = line.match(/\[(.+)\]\((.+)\)/);
//             if (parts)
//                 return <p key={index}><a href={parts[2]}>{parts[1]}</a></p>;
//         }
//         return <p key={index}>{line}</p>;
//     });
// };