import React, { CSSProperties, Component, ReactNode } from "react";
export interface LinePartCss {
    foreground?: string | number;
    bold?: string;
    background?: string;
    italic?: string;
    underline?: string;
    email?: boolean;
    link?: boolean;
    text: string;
}
export interface LinePartProps {
    /**
     * The pieces of data to render in a line. Will typically
     * be multiple items in the array if ANSI parsed prior.
     */
    part: LinePartCss;
    /**
     * Style for the line Part
     */
    style?: CSSProperties | undefined;
    /**
     * Enable hyperlinks to be discovered in log text and made clickable links. Default is false.
     */
    enableLinks?: boolean;
    /**
     * Execute a function against each line part's
     * `text` property in `data` to process and
     * return a new value to render for the part.
     */
    format?: ((text: string) => ReactNode) | undefined;
}
/**
 * An individual segment of text within a line. When the text content
 * is ANSI-parsed, each boundary is placed within its own `LinePart`
 * and styled separately (colors, text formatting, etc.) from the
 * rest of the line's content.
 */
export default class LinePart extends Component<LinePartProps, any> {
    static defaultProps: {
        format: null;
        style: null;
        enableLinks: boolean;
    };
    render(): React.JSX.Element;
}
