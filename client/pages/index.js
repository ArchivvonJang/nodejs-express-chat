import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Chat Chat!</a>
        </h1>
        
        <p className={styles.description}>
          안녕하세요.
        </p>

        <div className={styles.grid}>
          <a href="/sign-in" className={styles.card}>
            <h2>Sign In &rarr;</h2>
            {/* <p>로그인 후 이용해주세요</p> */}
          </a>

          <a href="/sign-up" className={styles.card}>
            <h2>Sign Up &rarr;</h2>
            {/* <p>회원가입을 하시면, 더 많은 서비스를 이용하실 수 있습니다</p> */}
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/skate.svg" alt="Skateboard Logo" width={60} height={60} />
          </span>
        </a>
      </footer>
    </div>
  )
}
