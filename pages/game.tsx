import styled from "@emotion/styled"
import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { wordsArr } from "../data/words"
import Header from "./components/Header"
import { Preloader } from "./components/Preloader/Preloader"

function shuffleArrayFn(array: string[], maxLenght: number): any {
	let i = array.length - 1
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}

	let newArr = array
		.map((item) => {
			if (item.length === maxLenght) return item
		})
		.filter((item) => item != undefined)

	return newArr
}

function splitByIndex(value: string) {
	if (value == undefined) return ""

	let index = Math.round(value.length / 2)
	return [value.substring(0, index), value.substring(index)]
}

//////

const Game = () => {

	const router = useRouter()

	const options: any = useSelector((state) => state)

	const [shuffleArr, setShuffleArr] = useState<[] | string[]>(wordsArr)

	const [counter, setCounter] = useState(0)
	const maxCount = options.wordsCount

	useEffect(() => {
		setShuffleArr(shuffleArrayFn(wordsArr, options.lettersInWordCount))
	}, [])

	const [currWord, setCurrWord] = useState<string[] | "">("")

	setTimeout(() => {
		if (maxCount > counter) {
			const splitedWord = splitByIndex(shuffleArr[counter])
			setCurrWord(splitedWord)
			setCounter(counter + 1)
		} else router.push("/finish")
	}, options.speed * 1000)


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
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	`
	const TitleWrapper = styled("div")`
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	`

	const Title = styled("h3")`
		font-family: Roboto;
		font-weight: bold;
		font-size: 54px;
		line-height: 52px;
		color: #371548;
	`

	const ImgWrapper = styled("div")`
		display: flex;
		justify-content: space-between;
		font-size: 120px;
		font-weight: bold;
		color: #371548;
		margin: 0 ${"50px"};
	`

	

	if (currWord == "") return <Preloader />
	if (!currWord && currWord !== "") return <h1>Error</h1>

	return (
		<AppWrapper>
			<Header text={false} />

			<Container>
				<TitleWrapper>
					<Title>{currWord[0]}</Title>
					<ImgWrapper> ~ </ImgWrapper>
					<Title>{currWord[1]}</Title>
				</TitleWrapper>
			</Container>
		</AppWrapper>
	)
}

export default Game
