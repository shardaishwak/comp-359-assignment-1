import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the canvas to prevent server-side rendering (SSR)
const Canvas = dynamic(() => import("@/components/canvases/"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="bg-white grid grid-cols-2 grid-rows-2 h-screen w-full gap-4 p-4">
			{/* Run the four sorting algorithms */}
			<Canvas algorithm="quick-sort" />
			<Canvas algorithm="merge-sort" />
			<Canvas algorithm="quick-sort" />
			<Canvas algorithm="merge-sort" />
		</div>
	);
}
