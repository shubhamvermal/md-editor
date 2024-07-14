import { useContext } from 'react'
import EditorContext from './context';
import React from 'react';

type EditorType = {
    value: string
}

export function Editor(props: EditorType) {
    const [state, setState] = useContext(EditorContext)

    // useEffect(()=>{
        // setState({...state, str: renderMarkdown(props.value)});
    // },[])

    const handleChange = (e: any) => {
        const value = e.target.value;
        console.log("🚀 ~ file: editor.tsx:12 ~ handleChange ~ value:", {x: value})

        setState({ ...state, str: renderMarkdown(value) })
    }
    return (
        <div style={{ "marginBottom": "1rem", "borderRadius": "0.5rem", "borderWidth": "1px", "borderColor": "#E5E7EB", "width": "100%", "backgroundColor": "#F9FAFB" }}>
            <div style={{ "borderBottomRightRadius": "0.5rem", "borderBottomLeftRadius": "0.5rem", "backgroundColor": "#ffffff" }}>
                <textarea defaultValue={props.value} onChange={handleChange} id="editor" rows={8} placeholder="Write an article..." required style={{ "display": "block", paddingLeft: "0 1rem", paddingRight: "0 1rem", "paddingTop": "0.5rem", "paddingBottom": "0.5rem", "borderWidth": "0", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "color": "#1F2937", "backgroundColor": "#ffffff" }} ></textarea>
            </div>
        </div>
    )
}


const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
        if (line === "") {
            return <br />
        }
        if (line  === "----") {
            return <hr/>
        }
        if (line.startsWith('# ')) {
            return <h1 key={index}>{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
            return <h2 key={index}>{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
            return <h3 key={index}>{line.substring(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
            return <h4 key={index}>{line.substring(5)}</h4>;
        }
        if (line.startsWith('##### ')) {
            return <h5 key={index}>{line.substring(6)}</h5>;
        }
        if (line.startsWith('###### ')) {
            return <h6 key={index}>{line.substring(7)}</h6>;
        }
        if (line.startsWith('- ')) {
            return <ul key={index}><li>{line.substring(2)}</li></ul>;
        }
        if (line.startsWith('* ')) {
            return <ul key={index}><li>{line.substring(2)}</li></ul>;
        }
        if (/\*\*(.+)\*\*/.test(line)) {
            const parts = line.split('**');
            return <p key={index}>{parts.map((part: any, i: number) => i % 2 === 0 ? part : <strong key={i}>{part}</strong>)}</p>;
        }
        if (/\*(.+)\*/.test(line)) {
            const parts = line.split('*');
            return <p key={index}>{parts.map((part: any, i: number) => i % 2 === 0 ? part : <em key={i}>{part}</em>)}</p>;
        }
        if (/\[(.+)\]\((.+)\)/.test(line)) {
            const parts = line.match(/\[(.+)\]\((.+)\)/);
            if (parts)
                return <p key={index}><a href={parts[2]}>{parts[1]}</a></p>;
        }
        return <p key={index}>{line}</p>;
    });
};