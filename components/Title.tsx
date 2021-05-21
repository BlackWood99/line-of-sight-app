import styled from '@emotion/styled'
import React from 'react'

interface ITitleProps {
    color?: string
    fontSize?: number
    fontWeight?: number
    lineHeight?: number
}

const Title: React.FC<ITitleProps> = ({children, color, fontSize, lineHeight, fontWeight}) => {

    const Title = styled("h3")`
        font-weight: ${fontWeight ? fontWeight : 700};
        font-size: ${fontSize ? fontSize+'px' : '40px'};
        line-height: ${lineHeight ? lineHeight+'px' : '52px'};
        color: ${color ? color : '#371548'};
    `

    return (
        <Title>
            {children}
        </Title>
    )
}



export default Title

