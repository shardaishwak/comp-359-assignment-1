import P5 from "p5/index";

export default interface SortingInterface {
	// Attributes
	values: number[];
	states: number[];
	sorted: boolean;
	swapCount: number;
	comparisonCount: number;
	p5: P5;
	windowWidth: number;
	windowHeight: number;

	run(values: number[]): void;
	incrementComparator(): void;
	incrementSwap(): void;
	activateState(index: number): void;
	deactivateState(index: number): void;

	// Getter and setter methods
	getValues(): number[];
	getStates(): number[];
	getComparisonCount(): number;
	getSwapCount(): number;
}
