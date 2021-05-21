import PropertyField from "../components/PropertyField"
import { useRouter } from "next/dist/client/router"
import FlexBox from "../components/FlexBox"
import Button from "../components/Button"

export default function Home() {
	
	const router = useRouter()

	const wordsCountArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const startDistanceArr = [5, 10, 15, 20, 25, 30, 35, 40]
	const lettersInWordCountArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	const increaseDistanceArr = [5, 10, 15, 20, 25, 30, 35, 40]

	return (
		<FlexBox
			alignItems='center'
			justifyContent='space-between'
			flexWrap='wrap'
		>
			<PropertyField
				text='Сколько слов'
				arr={wordsCountArr}
				name='wordsCount'
			/>
			<PropertyField
				text='Стартовое расстояние'
				arr={startDistanceArr}
				name='startDistance'
			/>
			<PropertyField
				text='Сколько букв в словах'
				arr={lettersInWordCountArr}
				name='lettersInWordCount'
			/>
			<PropertyField
				text='Увеличение расстояния'
				arr={increaseDistanceArr}
				name='increaseDistance'
			/>
			<PropertyField
				text='Скорость'
				name='speed'
			/>
			<Button
				onClickFn={() => router.push("/game")}
				borderRadius='50px'
				width='350px'
				height='100px'
				margin='auto'
				backgroundColor='#fdd207'
			>
				Старт
			</Button>
		</FlexBox>
	)
}
