import React, { useState } from 'react'
import "../assets/index.css";
import EditorContext from './context'
import { Options } from './options';
import { Editor } from './editor';
import { Previewer } from './previewer';


type MdEditorType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
const initialState = {
    str: "",
    ast: {},
    html: ""
}


export function MdEditor(props: MdEditorType) {
    const state = useState(initialState)
    const { children } = props;
    return (
        <EditorContext.Provider value={state}>
            {children}
        </EditorContext.Provider>
    )
}


MdEditor.Options = Options;
MdEditor.Editor = Editor;
MdEditor.Previewer = Previewer;
