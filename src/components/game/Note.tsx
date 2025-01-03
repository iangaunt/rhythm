import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import NoteHandler from "../NoteHandler";

export default function Note(props: {
    lane: number,
    activityNumber: number
}): JSX.Element | false {
    
    const ref = useRef(null);
    const [height, setHeight] = useState(1.05);
    
    useEffect(() => {
        NoteHandler.addNote(props.lane);
    })
    
    useFrame((state, delta) => {
        if (ref.current) {
            const curr: any = ref.current!;
            curr.position.y -= delta * 4;
            if (!NoteHandler.activityBuffer[props.activityNumber]) { setHeight(0); }
        }
    });

    return (
        <mesh
            {...props}
            ref={ref}
            position={[props.lane * 0.5 - 1.25, 10, 0]}
        >
            <boxGeometry args={[0.48, 0.25, height]} />
            <meshStandardMaterial color={props.lane < 3 ? "red" : "blue"} />
        </mesh>
    );
}