import React from "react"
import FlexBox from "../components/FlexBox"
import Title from "../components/Title"

const Finish = () => {

	return (
		<FlexBox minHeight="50vh" flexDirection="column" justifyContent="center" alignItems="center">
			<img src='/finish.png' alt='symbol' width={464} height={532} />
			<Title>Отличная работа!</Title>
		</FlexBox>
	)
}

export default Finish
