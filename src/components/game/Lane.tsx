import Rect from "./Rect";

export default function Lane() {
    const lanes = [];
    for (let i = 0; i < 5; i++) {
        lanes.push(
            <Rect 
                size={[0.02, 100, 1]} 
                color={"rgb(56, 65, 74)"}
                position={[i * 0.5 - 1, 0, 0]}
            />
        );
    }

    return (
        <>
            <Rect size={[2, 100, 1]} color={"rgb(36, 45, 54)"} />
            <Rect size={[2.4, 100, 0.2]} color={"rgb(46, 55, 64)"} />

            <Rect size={[0.5, 3, 0.2]} color={"rgb(46, 55, 64)"} rotation={[0, 0, Math.PI / 24]} position={[1, 0, 0]} />
            <Rect size={[0.5, 3, 0.2]} color={"rgb(46, 55, 64)"} rotation={[0, 0, -Math.PI / 24]} position={[-1, 0, 0]} />

            {lanes}
        </>
    );
}