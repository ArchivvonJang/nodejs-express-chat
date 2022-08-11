import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        >
        <span className={styles.logo}>
            {/* <Image href="../../public/skate.svg" alt="Skateboard Logo" width={60} height={60} /> */}
        </span>
        </a>
        </footer>
    );
}