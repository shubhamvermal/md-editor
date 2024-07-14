import { useContext } from 'react'
import EditorContext from './context'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PreviewerTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any
};

export function Previewer(props:PreviewerTypes) {
  const {style} = props;
  const [state] = useContext(EditorContext)

  return (
    <div style={{padding: "1rem", textAlign:"left","whiteSpace":"pre", ...style}}>
      {state.str}
    </div>
  )
}
