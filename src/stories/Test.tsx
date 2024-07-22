import React from 'react'
import { MdEditor } from '../editor'

type TestType = {
    value: string
}
const Test = ({ value }: TestType) => {
    return (
        <MdEditor>
            <div style={{ display: "flex", flexDirection: "row-reverse", height: "80vh" }}>
                <div style={{ width: "50%" }}>
                    <h3>Editor</h3>
                    {/* <MdEditor.Options /> */}
                    <MdEditor.Editor style={{
                        height: "80vh",
                        // overflow: "auto"
                    }} value={value} getMarkDown={(t) => { }} onChange={(t) => { }} />
                </div>
                <div style={{ width: "50%" }} >
                    <h3>Previewer</h3>
                    <MdEditor.Previewer style={{
                        height: "80vh",
                        overflow: "auto"
                    }} />
                </div>
            </div>
        </MdEditor>
    )
}

export default Test