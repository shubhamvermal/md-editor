import React from 'react'
import { renderMarkdown } from './helper';

type PreviewerTypes = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: Record<string, string | number>;
    html?: string;
    value?: string;
};

export function MdPreviewer(props: PreviewerTypes) {
    const { style, html, value } = props;

    return (
        <div style={{ padding: "1rem", textAlign: "left", "whiteSpace": "pre", ...style }}>
            <div dangerouslySetInnerHTML={{ __html: html || renderMarkdown(value || "") }}></div>
        </div>
    )
}
