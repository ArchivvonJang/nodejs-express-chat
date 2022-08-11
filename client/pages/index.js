import styles from '../styles/Home.module.css'
import _Footer from '../components/footer/Footer'
import _Header from '../components/Header/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <_Header />

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

    <_Footer/>
    </div>
  )
}
