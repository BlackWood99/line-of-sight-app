import React from "react"
import { Range, getTrackBackground } from "react-range"

interface IRangeProps {
    step: number
    min: number
    max: number
    val: any
    onChangeVal(val: number): void
}

const RangeProperty: React.FC<IRangeProps> = ({step, min, max, val, onChangeVal}) => {
	return (
		<Range
			step={step}
			min={min}
			max={max}
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
							width: max == 12 ? "92%" : "100%",
							borderRadius: "50px",
							backgroundColor: "#FDD207",
							background: getTrackBackground({
								values: val.values,
								colors: ["#FDD207", "#fff"],
								min: min,
								max: max,
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
	)
}

export default RangeProperty
