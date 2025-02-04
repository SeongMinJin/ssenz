"use client"
import * as vis from "vis-network";
import { useEffect, useRef } from "react";


export default function Home() {

	const networkContainer = useRef(null);

	useEffect(() => {
		if (networkContainer.current) {

			const nodes = [
				{
					id:1,
					label: "Node 1"
				},
				{
					id:2,
					label: "Node 2"
				},
				{
					id:3,
					label: "Node 3"
				},
				{
					id:4,
					label: "Node 4"
				},
			]
			const data = { nodes };
	
			const options = {
				autoResize: true,
				height: "100%",
				width: "100%",
				nodes: {
					shape: "dot",
					size: 20,
				},
				physics: {
					enabled: true,
				},
			}
	
			new vis.Network(networkContainer.current, data, options);
		}
	}, []);


	return (
		<div id="main-container" ref={networkContainer} className="h-screen w-screen bg-slate-100"  ></div>
	);
}
