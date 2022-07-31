import { useRouter } from "next/router"
import styles from '../styles/toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter()
    return (
        <div className={styles.main}>
            <div className={styles.indiaarcade}>
                <a href="#arcadee"><img src="/indiaarcade.png" alt="" /></a>
            </div>
            <div className={styles.options}>
            <div  className={styles.click}><a href="#overview">Overview</a></div>
            <div className={styles.click}><a href="#teamsf">Arcade Team</a></div>
            <div className={styles.click}><a href="#foot">Connect</a></div>
            </div>
        </div>
    );
}