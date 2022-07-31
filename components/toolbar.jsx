import { useRouter } from "next/router"
import styles from '../styles/toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter()
    return (
        <div className={styles.main}>
            <div className={styles.indiaarcade}>
                <img src="/indiaarcade.png" alt="" />
            </div>
            <div className={styles.options}>
            <div  className={styles.click}><a href="#overview">Overview</a></div>
            <div onClick={() => router.push('/feed/1')} className={styles.click}>Why Arcade?</div>
            <div className={styles.click}><a href="#teamsf">Connect</a></div>
            </div>
        </div>
    );
}