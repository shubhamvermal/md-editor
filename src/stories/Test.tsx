import React from 'react'
import { MyEditor } from '../editor'

type TestType = {
    value: string
}
const Test = ({ value }: TestType) => {
    return (
        <MyEditor>
            <div style={{ display: "flex", flexDirection: "row-reverse", height: "80vh" }}>
                <div style={{ width: "50%" }}>
                    <h3>Editor</h3>
                    {/* <MyEditor.Options /> */}
                    <MyEditor.Editor style={{
                        height: "80vh",
                        // overflow: "auto"
                    }} value={value} getMarkDown={(t) => { }} onChange={(t) => { }} />
                </div>
                <div style={{ width: "50%" }} >
                    <h3>Previewer</h3>
                    <MyEditor.Previewer style={{
                        height: "80vh",
                        overflow: "auto"
                    }} />
                </div>
            </div>
        </MyEditor>
    )
}

export default Test