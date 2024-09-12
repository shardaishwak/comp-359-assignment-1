"use client";

import Helpers from "@/helpers";
import P5 from "p5/index";
import SortingInterface from "./sorting.interface";

export default class QuickSort implements SortingInterface {
	public p5: P5;
	public values: number[];
	public states: number[];
	public sorted: boolean;
	public swapCount: number;
	public comparisonCount: number;

	public windowWidth: number;
	public windowHeight: number;

	constructor(p5: P5, values: number[], width: number, height: number) {
		this.p5 = p5;
		this.windowWidth = width;
		this.windowHeight = height;
		this.values = values;
		this.states = new Array(this.values.length).fill(-1);
		this.sorted = false;
		this.comparisonCount = 0;
		this.swapCount = 0;
	}

	private async quickSort(
		arr: number[],
		low: number = 0,
		high: number = arr.length - 1
	) {
		if (low < high) {
			const pi = await this.partition(arr, low, high);
			await this.quickSort(arr, low, pi - 1);
			await this.quickSort(arr, pi + 1, high);
		}

		if (low >= 0 && high >= 0) {
			this.illuminate(low, high);
		}
	}

	private async partition(
		arr: number[],
		low: number,
		high: number
	): Promise<number> {
		const pivot = arr[high];
		let i = low - 1;

		for (let j = low; j < high; j++) {
			this.activateState(j);
			this.incrementComparator();
			await Helpers.sleep(10);

			if (arr[j] < pivot) {
				i++;
				this.swap(arr, i, j);
				this.incrementSwap();
			}
		}

		this.swap(arr, i + 1, high);
		this.incrementSwap();
		this.deactivateState(high);
		this.deactivateState(i + 1);

		return i + 1;
	}

	private swap(arr: number[], a: number, b: number) {
		const temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}

	public async run(values: number[]) {
		await this.quickSort(values);
	}

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

	public illuminate(start: number, end: number) {
		for (let i = start; i <= end; i++) {
			this.deactivateState(i);
		}
	}

	public getValues() {
		return this.values;
	}

	public getStates() {
		return this.states;
	}

	public getComparisonCount() {
		return this.comparisonCount;
	}

	public getSwapCount() {
		return this.swapCount;
	}
}
