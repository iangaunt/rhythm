import { Canvas } from "@react-three/fiber";

import Note from "@/components/game/Note";
import Lane from "@/components/game/Lane";
import Tapper from "@/components/game/Tapper";

import styles from "@/styles/index.module.css"
import NoteHandler from "@/components/NoteHandler";
import { useEffect } from "react";
import Template from "./template";

new NoteHandler();
let keydown = false;

export default function App() {
	useEffect(() => {
		if (!keydown) {
			keydown = true;
			document.addEventListener("keydown", (event) => {
				switch (event.key) {
					case "a": { NoteHandler.checkClosestNote(1); break; }
					case "s": { NoteHandler.checkClosestNote(2); break; }
					case "k": { NoteHandler.checkClosestNote(3); break; }
					case "l": { NoteHandler.checkClosestNote(4); break; }

					default: {}
				}
			});
		}
	})

	return (
		
		<div className={styles.main}>
			<Template>
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
					
					<Note lane={1} activityNumber={NoteHandler.current}/>
					<Note lane={2} activityNumber={NoteHandler.current}/>
					<Note lane={3} activityNumber={NoteHandler.current}/>
					<Note lane={4} activityNumber={NoteHandler.current}/>
				</Canvas>
			</Template>
		</div>
		
	);
}
