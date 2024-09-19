import P5 from "p5/index";
import { SortingStatistics } from "./sorting-template";

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
	speed: number;
	time: Date;

	run(values: number[]): void;
	incrementComparator(): void;
	incrementSwap(): void;
	activateState(index: number): void;
	deactivateState(index: number): void;

	// Utility methods
	sleep(): Promise<void>;
	setSpeed(speed: number): void;
	getStatistics(): SortingStatistics



}
