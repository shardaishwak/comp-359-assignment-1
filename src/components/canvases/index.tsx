"use client";

import Sketch from "react-p5";
import P5 from "p5/index";
import React, { useRef } from "react";
import MergeSort from "../merge-sort";
import Helpers from "@/helpers";
import QuickSort from "../quick-sort";
import SortingTemplate from "../sorting-template";
import { SelectAlgorithm } from "../select-algorithm";

const sortingAlgorithms = {
	"merge-sort": MergeSort,
	"quick-sort": QuickSort,
};

const size = 2;

export default function MergeSortCanvas() {
	const viewRef = React.useRef<HTMLDivElement>(null);
	const sortRef = useRef<SortingTemplate | null>(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [algorithmChosen, setAlgorithmChosen] = React.useState<string| null>(null);
	const [speed, setSpeed] = React.useState(10);

	const chooseAlgorithm = (algorithm: string) => {
		setAlgorithmChosen(algorithm);
		setIsLoaded(false);
	}

	React.useEffect(() => {
		if(algorithmChosen){
			setIsLoaded(true);
		}
	}, [algorithmChosen]);

	React.useEffect(() => {
		if (sortRef.current) {
			sortRef.current.setSpeed(speed);
		}
	}, [speed]);

	const setup = async (p5: P5, canvasParentRef: Element) => {
		const width = viewRef.current?.clientWidth || window.innerWidth / 2;
    	const height = viewRef.current?.clientHeight || window.innerHeight / 2;
	
		p5.createCanvas(width, height).parent(canvasParentRef);
		p5.background(0);

		const AlgorithmClass = sortingAlgorithms[algorithmChosen];

		if (sortRef.current) {
			sortRef.current = null;
		}
	
		sortRef.current = new AlgorithmClass(
			p5,
			Helpers.generateRandomArray(p5, width, height, size),
			width,
			height
		);
	
		const { values } = sortRef.current?.getStatistics();
		sortRef.current?.run(values);
		sortRef.current?.setSpeed(speed);
	};
	
	const draw = (p5: P5) => {
		if (!sortRef.current) return;
		const { values, states, comparisonCount, swapCount, timeElapsed } =
			sortRef.current.getStatistics();

		const height = viewRef.current?.clientHeight || window.innerHeight/2;

		p5.background(0);

		for (let i = 0; i < values.length; i++) {
			if (states[i] == 0) {
				p5.fill(0, 0, 255);
			} else if (states[i] == 1) {
				p5.fill(0, 255, 0);
			} else {
				p5.fill(255);
			}
			p5.rect(i * size, height - values[i], size, values[i]);
		}

		p5.fill(255);
		p5.textSize(12);
		p5.text(`Algorithm: ${algorithmChosen}`, 20, 20);
		p5.text(`Values: ${values.length}`, 20, 40);
		p5.text(`Swaps: ${swapCount}`, 20, 60);
		p5.text(`Comparisons: ${comparisonCount}`, 20, 80);
		p5.text(`Time elapsed: ${(timeElapsed / 1000).toFixed(2)} seconds`, 20, 100)
	};
	return (
		<div className="w-full flex flex-col justify-between bg-gray-50">
		  {/* Algorithm Selection */}
		  <div className="p-4">
			<SelectAlgorithm chooseAlgorithm={chooseAlgorithm} />
		  </div>
		  
		  {/* Sketch canvas */}
		  <div ref={viewRef} className="flex-grow">
			{isLoaded && <Sketch setup={setup as never} draw={draw as never} />}
		  </div>
		  
		  {/* Speed Input at the bottom */}
		  <div className="p-4">
			<input
			  type="range"
			  min="0.00011"
			  max="250"
			  value={speed}
			  onChange={(e) => setSpeed(parseInt(e.target.value))}
			  className="w-full"
			/>
		  </div>
		</div>
	  );
}
