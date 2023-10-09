import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/App.module.scss'
import React from 'react'
import Navbar from 'components/Navbar'
import Landing from 'pages/landing'
import Intro from 'components/Intro'
import Social from 'components/Social'

export default function App() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Manal Jaber-Shehayeb</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://kit.fontawesome.com/34707ef942.js" crossorigin="anonymous"></script> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
      </Head>

      {/* <body className={styles.body}> */}
        <header id='header' className={styles.header}>
          <Intro/>
          <Navbar/>
          <Social/>
        </header>
      <Landing/>
      {/* </body> */}

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
