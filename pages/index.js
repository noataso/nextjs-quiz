import Link from "next/link";
import styles from "../styles/Home.module.css"
const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link href="/quiz">
                    <p className={styles.title}>quiz</p>
                </Link>
            </div>
        </div>
    );
}

export default index;