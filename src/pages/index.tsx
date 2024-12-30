import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import styles from "@/styles/index.module.css"
import * as THREE from 'three';

function Lane(props: any) {
	const ref = useRef();

	return (
		<mesh
			{...props}
			ref={ref}
			rotation={[0, 0, 0]}
		>
			<boxGeometry args={[2, 100, 1]}  />
			<meshStandardMaterial color={"rgb(80, 88, 109)"} />
		</mesh>
	);
}

function Tapper(props: any) {
	const normals = useLoader(THREE.TextureLoader, "metal_normal.jpg");
	const ref = useRef();

	return (
		<mesh
			{...props}
			ref={ref}
			rotation={[0, 0, 0]}
		>
			 <meshStandardMaterial
				attach="material"
				color="white"
				metalness={0.2}
				normalMap={normals}
			/>

			<boxGeometry args={[2, 0.2, 1.05]}  />
			<meshStandardMaterial color={"rgb(199, 203, 214)"} />
		</mesh>
	);
}

function Note(props: any) {
	// This reference gives us direct access to the THREE.Mesh object.
	const ref = useRef();

	// Subscribe this component to the render-loop and rotate the mesh every frame.
	let curr: any = ref.current!;
	let j: NodeJS.Timeout;
	j = setInterval(
		() => {
			curr = ref.current!;
			if (curr != undefined) clearInterval(j);
		}, 100
	)

	useFrame((state, delta) => (curr.position.x += delta));

	return (
		<mesh
			{...props}
			ref={ref}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={"red"} />
		</mesh>
	);
}


function Box(props: any) {
	// This reference gives us direct access to the THREE.Mesh object.
	const ref = useRef();

	// Hold state for hovered and clicked events.
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);

	// Subscribe this component to the render-loop and rotate the mesh every frame.
	let curr: any = ref.current!;
	if (curr == undefined) curr = {
		rotation: {
			x: 0
		}
	}
	
	console.log(curr)

	useFrame((state, delta) => (curr.rotation.x += delta));

	// Return the view.
	// These are regular three.js elements expressed in JSX.
	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1}
			onClick={() => click(!clicked)}
			onPointerOver={() => hover(true)}
			onPointerOut={() => hover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
}

export default function App() {
	return (
		<div className={styles.main}>
			<Canvas
				camera={{
					rotation: [0.67, 0, 0],
					position: [0, -1, 4]
				}}>
				<color attach="background" args={["#000"]} />

				<fog attach="fog" args={["black", 0, 10]} />
				<ambientLight intensity={0.5} />
				<pointLight position={[0, 0, 5]} intensity={20} />

				<Lane />
				<Tapper />
				<Note />
			</Canvas>
		</div>
	);
}
