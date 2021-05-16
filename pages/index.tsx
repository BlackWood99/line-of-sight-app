import Head from "next/head"
import styled from "@emotion/styled"
import Header from "./components/Header"
import PropertyField from "./components/PropertyField"
import { useDispatch, useSelector } from "react-redux"
import { changeStateValue } from "../redux/actions"
import { useRouter } from "next/dist/client/router"

export default function Home() {

	const AppWrapper = styled("div")`
		background-color: #f7f9ff;
		min-height: 100vh;
	`

	const Container = styled("div")`
		width: 100%;
		max-width: 1460px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	`

	const StartButton = styled("button")`
		border: none;
		border-radius: 50px;
		outline: none;
		background-color: #fdd207;
		color: #371548;
		width: 350px;
		height: 100px;
		margin: 5px;
		font-family: Roboto;
		font-weight: bold;
		font-size: 56px;
		text-transform: uppercase;
		cursor: pointer;
		margin-left: 12%;
	`
	const router = useRouter()

	const wordsCountArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const startDistanceArr = [5, 10, 15, 20, 25, 30, 35, 40]
	const lettersInWordCountArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	const increaseDistanceArr = [5, 10, 15, 20, 25, 30, 35, 40]

	const state = useSelector(state => state)
	const dispatch = useDispatch()

	const onChangeValues = (optionName: string, optionValue: number) => {
		dispatch(changeStateValue(optionName, optionValue))
	}
	
	return (
		<AppWrapper>
			<Head>
				<title>Light of Sight</title>
				<meta name='description' content="test task 'Light of Sight'" />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Header text={true} />

			<Container>
				<PropertyField
					text='Сколько слов'
					arr={wordsCountArr}
					name='wordsCount'
                    stateValues={state}
					onChangeValue={onChangeValues}
				/>
				<PropertyField
					text='Стартовое расстояние'
					arr={startDistanceArr}
					name='startDistance'
                    stateValues={state}
					onChangeValue={onChangeValues}
				/>
				<PropertyField
					text='Сколько букв в словах'
					arr={lettersInWordCountArr}
					name='lettersInWordCount'
                    stateValues={state}
					onChangeValue={onChangeValues}
				/>
				<PropertyField
					text='Увеличение расстояния'
					arr={increaseDistanceArr}
					name='increaseDistance'
                    stateValues={state}
					onChangeValue={onChangeValues}
				/>
				<PropertyField
					text='Скорость'
					name='speed'
                    stateValues={state}
					onChangeValue={onChangeValues}
				/>
				<StartButton onClick={() => router.push('/game')}>Старт</StartButton>
			</Container>
		</AppWrapper>
	)
}
