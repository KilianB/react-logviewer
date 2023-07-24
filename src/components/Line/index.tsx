import React, {
    CSSProperties,
    Component,
    MouseEventHandler,
    ReactNode,
} from "react";

import LineContent from "../LineContent";
import LineGutter from "../LineGutter";
import LineNumber from "../LineNumber";
import styles from "./index.module.css";

export interface LineProps {
    data?: any[];
    number?: number | string;
    rowHeight?: number;
    highlight?: boolean | undefined;
    selectable?: boolean | undefined;
    style?: CSSProperties | undefined;
    className?: string;
    gutter?: React.ReactNode;
    highlightClassName?: string;
    formatPart?: ((text: string) => ReactNode) | undefined;
    onLineNumberClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

/**
 * A single row of content, containing both the line number
 * and any text content within the line.
 */
export default class Line extends Component<LineProps, any> {
    static defaultProps = {
        highlight: false,
        selectable: false,
        style: {},
        formatPart: null,
        onLineNumberClick: null,
        onRowClick: null,
        className: "",
        highlightClassName: "",
    };

    render() {
        const {
            data,
            formatPart,
            highlight,
            selectable,
            onLineNumberClick,
            number,
            rowHeight,
            style,
            className,
            highlightClassName,
            gutter,
        } = this.props;
        const selectableClass = selectable ? ` ${styles.lineSelectable}` : "";
        const highlightClass = highlight
            ? ` ${styles.lineHighlight} ${highlightClassName}`
            : "";
        const classes = `${styles.line}${selectableClass}${highlightClass} ${className}`;
        const lineStyle = {
            ...style,
            lineHeight: `${style ? style.height || rowHeight : rowHeight}px`,
            minWidth: style ? style.width || "100%" : "100%",
            width: undefined,
        } as CSSProperties;

        return (
            <div className={classes} style={lineStyle}>
                <LineNumber
                    number={number}
                    highlight={highlight}
                    onClick={onLineNumberClick}
                />
                <LineGutter gutter={gutter} />
                <LineContent
                    number={number}
                    formatPart={formatPart}
                    data={data}
                />
            </div>
        );
    }
}
