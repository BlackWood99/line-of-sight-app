import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Button from "./Button"
import FlexBox from "./FlexBox"
import Title from "./Title"
import { stateType } from "../redux/gameOptionsReducer"
import RangeProperty from "./RangeProperty"
import { useDispatch, useSelector } from "react-redux"
import { changeStateValue } from "../redux/actions"

interface IPropFieldProps {
	text: string
	arr?: number[]
	name: string
}

const PropertyField: React.FC<IPropFieldProps> = ({text, arr: valuesArr, name}) => {

	const PropertyFieldStyled = styled("div")`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 708px;
		height: 220px;
		margin: 15px 0;
		padding: 25px 80px;
		background-color: #fff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 48px;
	`

	const CountButton = styled("button")`
		outline: none;
		border: none;
		background-color: #fdd207;
		font-size: 64px;
		font-weight: bold;
		border-radius: 10px;
		width: 80px;
		height: 80px;
		margin: 5px 10px;
		cursor: pointer;
	`

	const SpeedInput = styled("input")`
		max-width: 100px;
		border: 1px solid gray;
		border-radius: 12px;
		outline: none;
		background-color: white;
		font-size: 42px;
		font-weight: bold;
		text-align: center;
		margin-left: 35px;
		margin-right: 15px;
		padding: 0 20px;
	`

	const dispatch = useDispatch()

	const state = useSelector((state: stateType) => state)

	const [val, setVal] = useState({
		values: [ state[name] ]
	})

	useEffect(() => {
		setVal({ values: [state[name]] })
	}, [state])

	const onChangeVal = (val: number) => {
		dispatch(changeStateValue(name, val))
	}

	const onIncreaseSpeed = () => {
		if (val.values[0] === 5) return null
		else onChangeVal(val.values[0] + 1)
	}
	const onDecreaseSpeed = () => {
		if (val.values[0] === 1) return null
		else onChangeVal(val.values[0] - 1)
	}

	const STEP = valuesArr ? valuesArr[1] - valuesArr[0] : 1
	const MIN = valuesArr ? valuesArr[0] : 1
	const MAX = valuesArr ? valuesArr[valuesArr.length - 1] : 9

	return (
		<PropertyFieldStyled>
			{valuesArr ? (
				<>
					<Title>{text}</Title>
					<FlexBox
						width='100%'
						justifyContent='space-between'
						alignItems='center'
					>
						{valuesArr.map((n: number) => {
							return (
								<Button
									key={Math.random()}
									value={n}
									onClickFn={() => onChangeVal(n)}
									backgroundColor='transparent'
									fontSize={39}
									lineHeight={"45px"}
								>
									{n}
								</Button>
							)
						})}
					</FlexBox>
					<RangeProperty step={STEP} min={MIN} max={MAX} val={val} onChangeVal={onChangeVal} />
				</>
			) : (
				<>
					<FlexBox alignItems='center'>
						<Title>{text}</Title>
						<SpeedInput type='text' value={val.values[0]} readOnly />
						<Title>сек.</Title>
					</FlexBox>
					<FlexBox justifyContent='center' alignItems='center'>
						<CountButton onClick={onDecreaseSpeed}>—</CountButton>
						<CountButton onClick={onIncreaseSpeed}>+</CountButton>
					</FlexBox>
				</>
			)}
		</PropertyFieldStyled>
	)
}

export default PropertyField