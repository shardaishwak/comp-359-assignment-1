import P5 from "p5/index";

export default function generateRandomArray(
	p5: P5,
	width: number,
	height: number,
	size: number = 10
): number[] {
	const values: number[] = new Array(p5.floor(width / size));
	for (let i = 0; i < values.length; i++) {
		values[i] = p5.random(height);
	}
	return values;
}
