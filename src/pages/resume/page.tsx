import Navbar from "@/components/Navbar";

import styles from "@/styles/resume.module.css";
import Template from "../template";
import Header from "@/components/Head";

export default function Resume() {
    return (
        <>
            <Header />
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template>
                <div className={styles.container}>
                    <embed src="https://www.elmhurst.edu/wp-content/uploads/2017/10/Elmhurst-College-Writing-An-Effective-Resume.pdf" type="application/pdf"></embed>
                </div>
                </Template>
            </main>
        </>
    )
}