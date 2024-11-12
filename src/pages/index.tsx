import Navbar from "@/components/Navbar";
import styles from "@/styles/index.module.css"
import Template from "./template";
import Header from "@/components/Head";
import { Analytics } from "@vercel/analytics/react"

export default function Landing() {
	return (
		<>
		    <Header />
			<Analytics />
			
			<Navbar></Navbar>
				<main className={styles.main}>
					<Template >
						<div className={styles.title}>
							<h1>IAN →</h1>
							<h2>← GAUNT</h2>
						</div>
						<div className={styles.bar}>
							<div className={styles.y1}></div>
							<div className={styles.y2}></div>
							<div className={styles.g1}></div>
							<div className={styles.g2}></div>
						</div>
						<h1 className={styles.description}>
							developer, music producer, graphic designer
						</h1>
					</Template>
				</main>
		</>
	);
}
