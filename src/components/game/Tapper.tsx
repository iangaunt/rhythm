import { useRef } from "react";
import { useLoader } from "@react-three/fiber";

import * as THREE from "three";

export default function Tapper(props: any) {
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

            <boxGeometry args={[2.03, 0.2, 1.02]}  />
            <meshStandardMaterial color={"rgb(112, 121, 143)"} />
        </mesh>
    );
}