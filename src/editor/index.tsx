import React, { useState } from 'react'
import EditorContext from './context'
import { Options } from './options';
import { Editor } from './editor';
import { Previewer } from './previewer';


type MyEditorType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
const initialState = {
    str: "",
    ast: {},
    html: ""
}


export function MyEditor(props: MyEditorType) {
    const state = useState(initialState)
    const { children } = props;
    return (
        <EditorContext.Provider value={state}>
            {children}
        </EditorContext.Provider>
    )
}


MyEditor.Options = Options;
MyEditor.Editor = Editor;
MyEditor.Previewer = Previewer;


// rules

// h1-h6                     |            # Heading
// bold                      |            **Bold**
// itelic                    |            _itelic_
// strike threw              |             -STR-
// image                     |            img()[]
// order list                |            1. 
// unorder list              |            - 
// code block (bash)         |             ```
// code highlight            |            ` `
// blockquote 
// link                      |            url()[]
// HR                        |            hr.
// 


// https://kosamari.github.io/sbn/


// [ '', ' # Hello *world*', ' ## helo _itelic_', ' *bold*', '' ]


// function convertor (item){
    
// }

// function separator(str){
//     return str.split("\n")
// }
// function parser(str){
//     const itemList = separator(str)
//     console.log(itemList)
// }

// const str = `
//  # Hello *world*
//  ## helo _itelic_
//  *bold*
// `
// parser(str)




// for tokens
// by line
// by spaces
// 