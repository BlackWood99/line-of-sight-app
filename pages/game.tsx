import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/dist/client/router"
import { wordsArr } from "../data/words"
import FlexBox from "../components/FlexBox"
import Title from "../components/Title"
import Preloader from "../components/Preloader/Preloader"
import { stateType } from "../redux/gameOptionsReducer"

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
		.filter((item) => item !== undefined)

	return newArr
}

function splitByIndex(value: string) {
	if (value == undefined) return ""

	let index = Math.round(value.length / 2)
	return [value.substring(0, index), value.substring(index)]
}

// --------------------------

const Game = () => {
	
	const router = useRouter()

	const options = useSelector((state: stateType) => state)

	const [shuffleArr, setShuffleArr] = useState<[] | string[]>(wordsArr)

	const [counter, setCounter] = useState(0)
	const maxCount = options.wordsCount
	const [speedTimeOut, setSpeedTimeOut] = useState(1)
	const [distance, setDistance] = useState(options.startDistance)

	useEffect(() => {
		setShuffleArr(shuffleArrayFn(wordsArr, options.lettersInWordCount))
	}, [wordsArr, options.lettersInWordCount])

	const [currWord, setCurrWord] = useState<string[] | "">("")

	setTimeout(() => {
		setSpeedTimeOut(options.speed)
		if (maxCount > counter) {
			setCurrWord(
				splitByIndex(shuffleArr[counter])
			)
			setCounter(counter + 1)
			setDistance(distance + options.increaseDistance)
		} else router.push("/finish")
	}, speedTimeOut * 1000)

	if (currWord == "") return <Preloader />
	if (!currWord && currWord !== "") return <h1>Error</h1>
	
	return (
		<FlexBox justifyContent="center" alignItems="center" minHeight="50vh" margin="0 0 10px 0">
			<Title>{currWord[0]}</Title>
			<FlexBox margin={`0 ${distance}px`}> <Title fontSize={120} fontWeight={900}>~</Title> </FlexBox>
			<Title>{currWord[1]}</Title>
		</FlexBox>
	)
}

export default Game
