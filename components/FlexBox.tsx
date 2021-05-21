import styled from "@emotion/styled"
import React from "react"

interface IFlexBoxProps {
	flexDirection?: string
	justifyContent?: string
	alignItems?: string
	flexWrap?: string
	width?: string
	minHeight?: string
	margin?: string
}

const FlexBox: React.FC<IFlexBoxProps> = ({
	children,
	flexDirection,
	justifyContent,
	alignItems,
	flexWrap,
	width,
	minHeight,
	margin,
}) => {
	const FlexBox = styled("div")`
		display: flex;
		flex-direction: ${flexDirection || "row"};
		justify-content: ${justifyContent || "flex-start"};
		align-items: ${alignItems || "stretch"};
		flex-wrap: ${flexWrap || "nowrap"};
		width: ${width || "auto"};
		min-height: ${minHeight || "auto"};
		margin: ${margin || 0};
	`

	return <FlexBox>{children}</FlexBox>
}

export default FlexBox
