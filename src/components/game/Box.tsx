import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props: any) {
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