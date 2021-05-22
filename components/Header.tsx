import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import Title from "./Title"
import FlexBox from "./FlexBox"

const Header = () => {

	const Header = styled("header")`
		padding: 2rem 0;
		margin-bottom: 10px;
	`

	const Container = styled("div")`
		display: flex;
		justify-content: space-between;
        align-items: center;

		width: 100%;
		max-width: 1460px;
		margin: 0 auto;
	`

	return (
		<Header>
			<Container>
                <FlexBox width="10%"/>

				<Title color="#2B3172" fontSize={54} lineHeight={65}>
					Тренажер «Поле зрения»
				</Title>

                <Link href='/'>
                    <a>
                        <Title color="#2B3172" fontSize={48} fontWeight={900}>
                            LOGO
                        </Title>
                    </a>
                </Link>
			</Container>
		</Header>
	)
}

export default Header
