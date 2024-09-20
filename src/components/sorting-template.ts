"use client";

import Helpers from "@/helpers";
import SortingInterface from "./sorting.interface";
import P5 from "p5/index";

export type SortingStatistics = {
	values: number[];
	states: number[];
	comparisonCount: number;
	swapCount: number;
	timeElapsed: number;
};

export default abstract class SortingTemplate implements SortingInterface {
	values: number[];
	states: number[];
	sorted: boolean;
	swapCount: number;
	comparisonCount: number;
	p5: import("p5");
	windowWidth: number;
	windowHeight: number;
	speed: number;
	time: Date;
	finalElapsedTime: number | null; // New variable to store final time

	constructor(p5: P5, values: number[], width: number, height: number) {
		this.p5 = p5;
		this.windowWidth = width;
		this.windowHeight = height;
		this.values = values;
		this.states = new Array(this.values.length).fill(-1);
		this.sorted = false; // New flag to track sorting status
		this.finalElapsedTime = null; // New variable to track final elapsed time
		this.comparisonCount = 0;
		this.swapCount = 0;
		this.speed = 10;
		this.time = new Date();
	}

	public abstract run(values: number[]): Promise<void>;

	public incrementComparator() {
		this.comparisonCount++;
	}

	public incrementSwap() {
		this.swapCount++;
	}

	public activateState(index: number) {
		this.states[index] = 0;
	}

	public deactivateState(index: number) {
		this.states[index] = 1;
	}
	
	// Check if sorting is done
	public completeSorting() {
		this.sorted = true;
		this.finalElapsedTime = this.getTimeElapsed(); // Store the final time when sorting completes
	}

	public getTimeElapsed(): number {
		if (this.finalElapsedTime !== null) {
			return this.finalElapsedTime; // Return the final elapsed time if sorting is complete
		}
		return new Date().getTime() - this.time.getTime(); // Otherwise, calculate the elapsed time
	}

	public async sleep() {
		await Helpers.sleep(this.speed);
	}

	public setSpeed(speed: number): void {
		this.speed = speed;
	}

	//   Make it a method instead of a separate class
	public getStatistics(): SortingStatistics {
		return {
			values: this.values,
			states: this.states,
			comparisonCount: this.comparisonCount,
			swapCount: this.swapCount,
			timeElapsed: this.getTimeElapsed(),
		};
	}
}
