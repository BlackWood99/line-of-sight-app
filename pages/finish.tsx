import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import Header from "./components/Header"

const Finish = () => {
    
	const AppWrapper = styled("div")`
		background-color: #f7f9ff;
		min-height: 100vh;
	`

	const Container = styled("div")`
		min-height: 50vh;
		width: 100%;
		max-width: 1460px;
		margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	`

    const Title = styled("h3")`
        font-family: Roboto;
        font-weight: bold;
        font-size: 54px;
        line-height: 52px;
        color: #371548;
    `

	return (
		<AppWrapper>
			<Header text={false} />

			<Container>
                <Image
                    src="/finish.png"
                    alt="symbol"
                    width={464}
                    height={532}
                />
                <Title>Отличная работа!</Title>
			</Container>
		</AppWrapper>
	)
}

export default Finish
