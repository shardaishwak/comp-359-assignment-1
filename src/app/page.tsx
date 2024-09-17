import dynamic from "next/dynamic";
import React from "react";

const Canvas = dynamic(() => import("@/components/canvases/"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="bg-white w-screen h-screen">
			<div className="h-1/2">
				<Canvas algorithm={"merge-sort"} />
			</div>
			<div className="h-1/2">
				<Canvas algorithm={"quick-sort"} />
			</div>
		</div>
	);
}
