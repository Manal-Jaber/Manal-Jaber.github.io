import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manal Jaber-Shehayeb</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Manal Jaber-Shehayeb Portfolio
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
