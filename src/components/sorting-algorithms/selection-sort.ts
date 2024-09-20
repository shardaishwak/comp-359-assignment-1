"use client";

import SortingTemplate from "../sorting-template";

export default class SelectionSort extends SortingTemplate {
	constructor(values: number[], width: number, height: number) {
		super(values, width, height);
	}

	private async selectionSort(arr: number[]) {
		const n = arr.length;

		for (let i = 0; i < n; i++) {
			let minIdx = i;

			this.activateState(minIdx);

			for (let j = i + 1; j < n; j++) {
				this.deactivateState(j);
				this.incrementComparator();

				await this.sleep();

				if (arr[j] < arr[minIdx]) {
					minIdx = j;
				}

				this.activateState(j);
			}

			if (minIdx !== i) {
				const temp = arr[i];
				arr[i] = arr[minIdx];
				arr[minIdx] = temp;
				this.incrementSwap();
			}

			this.illuminate(i, i);
		}
	}

	public illuminate(start: number, end: number) {
		for (let i = start; i <= end; i++) {
			this.deactivateState(i);
		}
	}

	public async run(values: number[]) {
		this.time = new Date();
		await this.selectionSort(values);
		this.onFinish();
		this.greenAll();
	}
}
