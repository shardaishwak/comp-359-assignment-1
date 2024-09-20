"use client";

import SortingTemplate from "../sorting-template";

export default class QuickSort extends SortingTemplate {
	constructor(values: number[], width: number, height: number) {
		super(values, width, height);
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
			await this.sleep();

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
		this.time = new Date();
		await this.quickSort(values);
		this.onFinish();
	}

	public illuminate(start: number, end: number) {
		for (let i = start; i <= end; i++) {
			this.deactivateState(i);
		}
	}
}
