export default function sleep(ms) {
	const p = new Promise((resolve) => setTimeout(resolve, ms));
	return p;
}
