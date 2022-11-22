import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/App.module.scss'
import React from 'react'
import Navbar from 'components/Navbar'
import Landing from 'pages/landing'

export default function App() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Manal Jaber-Shehayeb</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Navbar/>
      <Landing/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
