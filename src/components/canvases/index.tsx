"use client";

import Sketch from "react-p5";
import P5 from "p5/index";
import React, { useRef } from "react";
import SortingInterface from "../sorting.interface";
import MergeSort from "../merge-sort";
import Helpers from "@/helpers";
import QuickSort from "../quick-sort";

type CanvasProps = {
	algorithm: "merge-sort" | "quick-sort";
};

const sortingAlgorithms = {
	"merge-sort": MergeSort,
	"quick-sort": QuickSort,
};

const size = 2;

export default function MergeSortCanvas(props: CanvasProps) {
	const viewRef = React.useRef<HTMLDivElement>(null);

	const sortRef = useRef<SortingInterface | null>(null);

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
	};

	const draw = (p5: P5) => {
		if (!sortRef.current) return;
		const values = sortRef.current.getValues();
		const states = sortRef.current.getStates();
		const swapCount = sortRef.current.getSwapCount();
		const comparisonCount = sortRef.current.getComparisonCount();

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
	};
	return (
		<div ref={viewRef} className="w-full h-screen bg-red-50">
			{viewRef.current && (
				<Sketch setup={setup as never} draw={draw as never} />
			)}
		</div>
	);
}
