"use client";

import Sketch from "react-p5";
import P5 from "p5/index";
import React, { useRef } from "react";
import Helpers from "@/helpers";
import SortingTemplate from "../sorting-template";
import MergeSort from "../sorting-algorithms/merge-sort";
import QuickSort from "../sorting-algorithms/quick-sort";
import BubbleSort from "../sorting-algorithms/bubble-sort";
import SelectionSort from "../sorting-algorithms/selection-sort";
import InsertionSort from "../sorting-algorithms/insertion-sort";
import ShellSort from "../sorting-algorithms/shell-sort";
import BogoSort from "../sorting-algorithms/bogo-sort";

type CanvasProps = {
	algorithm: "merge-sort" |
	"quick-sort" |
	"bubble-sort" |
	"selection-sort" |
	"shell-sort" |
	"insertion-sort" |
	"bogo-sort"
};

const sortingAlgorithms = {
	"merge-sort": MergeSort,
	"quick-sort": QuickSort,
	"bubble-sort": BubbleSort,
	// https://www.geeksforgeeks.org/bubble-sort-algorithm/
	"selection-sort": SelectionSort,
	// https://www.geeksforgeeks.org/selection-sort-algorithm-2/
	"insertion-sort": InsertionSort,
	// https://www.geeksforgeeks.org/insertion-sort-algorithm/
	"shell-sort": ShellSort,
	// https://www.codingeek.com/algorithms/shell-sort-algorithm-explanation-implementation-and-complexity/
	// https://www.geeksforgeeks.org/shell-sort/
	"bogo-sort": BogoSort,
	// https://www.geeksforgeeks.org/bogosort-permutation-sort/
};

// Increasing this value decreases values array size
const size = 10;

export default function MergeSortCanvas(props: CanvasProps) {
	const viewRef = React.useRef<HTMLDivElement>(null);

	const sortRef = useRef<SortingTemplate | null>(null);

	const [isLoaded, setIsLoaded] = React.useState(false);
	const [speed, setSpeed] = React.useState(10);
	React.useEffect(() => {
		setIsLoaded(true);
	}, []);
	React.useEffect(() => {
		if (sortRef.current) {
			sortRef.current.setSpeed(speed);
		}
	}, [speed]);

	const setup = async (p5: P5, canvasParentRef: Element) => {
		const width = viewRef.current?.clientWidth || window.innerWidth;
		const height = viewRef.current?.clientHeight || window.innerHeight;
		p5.createCanvas(width, height).parent(canvasParentRef);
		p5.background(0);

		sortRef.current = new sortingAlgorithms[props.algorithm](
			p5,
			Helpers.generateRandomArray(p5, width, height, size),
			width,
			height
		);
		sortRef.current.run(sortRef.current.getValues());
		sortRef.current.setSpeed(speed);
	};

	const draw = (p5: P5) => {
		if (!sortRef.current) return;

		const { values, states, comparisonCount, swapCount, timeElapsed } =
			sortRef.current.getStatistics();

		// const width = viewRef.current?.clientWidth || window.innerWidth;
		const height = viewRef.current?.clientHeight || window.innerHeight;

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
		p5.textSize(20);
		p5.text(`Values: ${values.length}`, 20, 30);
		p5.text(`Swaps: ${swapCount}`, 20, 60);
		p5.text(`Comparisons: ${comparisonCount}`, 20, 90);
		p5.text(`Time elapsed: ${timeElapsed / 1000} seconds`, 20, 120);
	};
	return (
		<div ref={viewRef} className="w-full h-screen bg-red-50">
			{isLoaded && <Sketch setup={setup as never} draw={draw as never} />}
			<input
				type="range"
				min="0.00011"
				max="250"
				value={speed}
				onChange={(e) => setSpeed(parseInt(e.target.value))}
				className="w-full"
			/>
		</div>
	);
}
