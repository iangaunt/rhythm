import Navbar from "@/components/Navbar";
import styles from "@/styles/index.module.css"
import Template from "../template";
import Header from "@/components/Head";

export default function About() {
	return (
		<>
		    <Header />
			
			<Navbar></Navbar>
				<main className={styles.main}>
					<Template >
						<div className={styles.title}>
							<h1>About Page</h1>
                            <h2>Here is another page!</h2>
						</div>
					</Template>
				</main>
		</>
	);
}
