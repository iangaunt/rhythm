import Navbar from "@/components/Navbar";
import styles from "@/styles/index.module.css"
import Template from "./template";
import Header from "@/components/Head";

export default function Landing() {
	return (
		<>
		    <Header />
			
			<Navbar></Navbar>
				<main className={styles.main}>
					<Template >
						<div className={styles.title}>
							<h1>Ian's Next Template</h1>
						</div>
					</Template>
				</main>
		</>
	);
}
