import { createContext } from "react";

const EditorContext = createContext({} as [{ str: string, html?: string }, (state: any) => void]);

export default EditorContext;
