// sum.test.js
import { expect, test } from "vitest";
import MergeSort from "../components/sorting-algorithms/merge-sort";
import BubbleSort from "../components/sorting-algorithms/bubble-sort";
import InsertionSort from "../components/sorting-algorithms/insertion-sort";
import QuickSort from "../components/sorting-algorithms/quick-sort";
import SelectionSort from "../components/sorting-algorithms/selection-sort";
import ShellSort from "../components/sorting-algorithms/shell-sort";

function generateRandomArray(
	width: number,
	height: number,
	size: number = 10
): number[] {
	const values: number[] = new Array(Math.floor(width / size));
	for (let i = 0; i < values.length; i++) {
		values[i] = Math.floor(Math.random() * height);
	}
	return values;
}

const values = generateRandomArray(1000, 100000, 5);
const sorted = values.sort((a, b) => b - a);

test("Bubble sort", () => {
	const sort = new BubbleSort(values, 1000, 100000);
	sort.setSpeed(0);
	sort.run(values);
	expect(sort.getValues()).toEqual(sorted);
});

test("Insertion sort", () => {
	const sort = new InsertionSort(values, 1000, 100000);
	sort.setSpeed(0);
	sort.run(values);
	expect(sort.getValues()).toEqual(sorted);
});

test("Selection sort", () => {
	const sort = new SelectionSort(values, 1000, 100000);
	sort.setSpeed(0);
	sort.run(values);
	expect(sort.getValues()).toEqual(sorted);
});

test("Merge sort", () => {
	const sort = new MergeSort(values, 1000, 100000);
	sort.setSpeed(0);
	sort.run(values);
	expect(sort.getValues()).toEqual(sorted);
});

test("Quick sort", async () => {
	const sort = new QuickSort(values, 1000, 100000);
	sort.setSpeed(0);
	await sort.run(values);
	expect(sort.getValues()).toEqual(sorted);
});

test("Shell sort", async () => {
	const sort = new ShellSort(values, 1000, 100000);
	sort.setSpeed(0);
	await sort.run(values);
	expect(sort.getValues()).toEqual(sorted);
});
