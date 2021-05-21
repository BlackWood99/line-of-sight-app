import React from "react"
import styled from "@emotion/styled"

interface IButton {
	border?: string
	borderRadius?: string
	backgroundColor?: string
	width?: string
	height?: string
	margin?: string
	fontWeight?: number
	fontSize?: number
    lineHeight?: string
	textTransform?: string

    value?: any
    onClickFn?: () => void
    onClick?: () => void
}

const Button: React.FC<IButton> = ({
	children,
	border,
	borderRadius,
	backgroundColor,
	width,
	height,
	margin,
	fontWeight,
	fontSize,
    lineHeight,
	textTransform,

    value,
    onClickFn
}) => {
	const Button = styled("button")`
		outline: none;
        cursor: pointer;
		border: ${border || "none"};
		border-radius: ${borderRadius || 0};
        background-color: ${backgroundColor || "#fff"};
        width: ${width || "auto"};
        height: ${height || "auto"};
        margin: ${margin || 0};
        font-weight: ${fontWeight || 700};
        font-size: ${fontSize ? fontSize+"px" : "56px"};
        line-height: ${lineHeight || "normal"};
        text-transform: ${textTransform || "uppercase"};
	`

	return <Button onClick={onClickFn} value={value}>{children}</Button>
}

export default Button
