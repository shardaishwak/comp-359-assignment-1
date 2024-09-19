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

	constructor(p5: P5, values: number[], width: number, height: number) {
		this.p5 = p5;
		this.windowWidth = width;
		this.windowHeight = height;
		this.values = values;
		this.states = new Array(this.values.length).fill(-1);
		this.sorted = false;
		this.comparisonCount = 0;
		this.swapCount = 0;
		this.speed = 10;
		this.time = new Date();
	}

	public abstract run(values: number[]): void;

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
	
	public getTimeElapsed(): number {
		return new Date().getTime() - this.time.getTime();
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
