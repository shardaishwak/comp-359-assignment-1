"use client";

import Sketch from "react-p5";
import P5 from "p5/index";
import React from "react";

export default function Home() {
	const viewRef = React.useRef<HTMLDivElement>(null);
	const [value, setValue] = React.useState<number>(1);

	const setup = (p5: P5, canvasParentRef: Element) => {
		console.log(viewRef);
		const width = viewRef.current?.clientWidth || window.innerWidth;
		const height = viewRef.current?.clientHeight || window.innerHeight;
		p5.createCanvas(width, height).parent(canvasParentRef);
		p5.background(0);
	};

	const draw = (p5: P5) => {
		p5.stroke(255); // Set the color of the point
		p5.strokeWeight(value); // Set the size of the point
		if (p5.mouseIsPressed) {
			p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
		}
	};
	return (
		<div ref={viewRef} className="w-1/2 h-screen bg-red-50">
			<Sketch setup={setup as never} draw={draw as never} />
			{/** Radio input */}
			<input
				type="range"
				value={value}
				onChange={(e) => setValue(+e.target.value)}
				min={1}
				max={10}
				className="w-100"
			/>
		</div>
	);
}
