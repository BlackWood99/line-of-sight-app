import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { Range, getTrackBackground } from "react-range"

interface IPropFieldProps {
	text: string
	arr?: number[]
	name: string
	stateValues: any
	onChangeValue(name: string, val: number): void
}

const PropertyField = (props: IPropFieldProps) => {
	const [val, setVal] = useState({ values: [props.stateValues ? props.stateValues[props.name] : 1] })

	useEffect(() => {
		setVal({ values: [props.stateValues[props.name]] })
	}, [props.stateValues])

	const onChangeVal = (val: number) => {
		props.onChangeValue(props.name, val)
	}

	const onIncreaseSpeed = () => {
		if (val.values[0] === 10) console.log('nope')
		else onChangeVal(val.values[0] + 1)
	}
	const onDecreaseSpeed = () => {
		if (val.values[0] === 1) console.log('nope')
		else onChangeVal(val.values[0] - 1)
	}

	const STEP = props.arr ? props.arr[1] - props.arr[0] : 1
	const MIN = props.arr ? props.arr[0] : 1
	const MAX = props.arr ? props.arr[props.arr.length - 1] : 9

	const PropertyFieldStyled = styled("div")`
		width: 650px;
		height: 190px;
		margin: 15px 10px;
		padding: 25px 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 48.2498px;
	`

	const Title = styled("h3")`
		font-family: Roboto;
		font-weight: bold;
		font-size: 40px;
		line-height: 52px;
		color: #371548;
	`

	const Numbers = styled("div")`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`

	const NumberButton = styled("button")`
		border: none;
		outline: none;
		background-color: transparent;
		font-family: Roboto;
		font-weight: bold;
		font-size: 38.5998px;
		line-height: 45px;
		cursor: pointer;
	`

	const CountButtonWrapper = styled("div")`
		display: flex;
		justify-content: center;
		align-items: center;
	`

	const CountButton = styled("button")`
		border: none;
		border-radius: 10px;
		outline: none;
		background-color: #fdd207;
		width: 80px;
		height: 80px;
		margin: 5px 10px;
		font-family: Roboto;
		font-weight: bold;
		font-size: 64px;
		cursor: pointer;
	`

	const SpeedTitleWrapper = styled("div")`
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	`

	const SpeedInput = styled("input")`
		max-width: 100px;
		border: 1px solid gray;
		border-radius: 12px;
		font-size: 42px;
		font-weight: bold;
		text-align: center;
		background-color: white;
		outline: none;
		margin-left: 35px;
		margin-right: 15px;
		padding: 1px 20px;
	`

	return (
		<PropertyFieldStyled>
			{props.arr ? 
				<Title>{props.text}</Title>
				: 
				<SpeedTitleWrapper>
					<Title>{props.text}</Title>
					<SpeedInput type="text" value={val.values[0]} readOnly/>
					<Title>сек.</Title>
				</SpeedTitleWrapper>
			}
			{props.arr ? (
				<Numbers>
					{props.arr.map((n: number) => {
						return (
							<NumberButton
								key={Math.random()}
								value={n}
								onClick={() => onChangeVal(n)}
							>
								{n}
							</NumberButton>
						)
					})}
				</Numbers>
			) : (
				<CountButtonWrapper>
					<CountButton onClick={onDecreaseSpeed}>—</CountButton>
					<CountButton onClick={onIncreaseSpeed}>+</CountButton>
				</CountButtonWrapper>
			)}
			{props.arr ? (
				<Range
					step={STEP}
					min={MIN}
					max={MAX}
					values={val.values}
					onChange={(values) => onChangeVal(values[0])}
					renderTrack={({ props, children }) => (
						<div
							onMouseDown={props.onMouseDown}
							onTouchStart={props.onTouchStart}
							style={{
								...props.style,
								height: "20px",
								display: "flex",
								width: "100%",
							}}
						>
							<div
								ref={props.ref}
								style={{
									height: "20px",
									width: MAX == 12 ? "92%" : "100%",
									borderRadius: "50px",
									backgroundColor: "#FDD207",
									background: getTrackBackground({
										values: val.values,
										colors: ["#FDD207", "#fff"],
										min: MIN,
										max: MAX,
									}),
									alignSelf: "center",
								}}
							>
								{children}
							</div>
						</div>
					)}
					renderThumb={({ props }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: "30px",
								width: "30px",
								borderRadius: "50%",
								backgroundColor: "#FDD207",
								outline: "none",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<div
								{...props}
								style={{
									...props.style,
									height: "12px",
									width: "12px",
									borderRadius: "50%",
									backgroundColor: "#000",
									outline: "none",
								}}
							/>
						</div>
					)}
				/>
			) : null}
		</PropertyFieldStyled>
	)
}

export default PropertyField
