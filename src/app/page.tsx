import dynamic from "next/dynamic";
import React from "react";

const Canvas = dynamic(() => import("@/components/canvases/"), {
	ssr: false,
});

export default function Home() {
	return (
		<div className="bg-white w-screen h-screen">
			<Canvas algorithm={"quick-sort"} />
		</div>
	);
}
