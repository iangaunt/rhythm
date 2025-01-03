export default function Rect(props: {
    position?: any,
    rotation?: any,
    size?: any,
    color?: string
}) {

    return (
        <mesh
            {...props}
            position={props.position ? props.position : [0, 0, 0]}
            rotation={props.rotation ? props.rotation : [0, 0, 0]}
        >
            <boxGeometry args={props.size ? props.size : [1, 1, 1]} />
            <meshStandardMaterial color={props.color ? props.color : "red"} />
        </mesh>
    );
}