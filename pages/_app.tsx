import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/App.module.scss'
import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

import type { AppProps } from 'next/app'
import Header from 'components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={styles.app}>
    <Head>
      <title>Manal Jaber-Shehayeb</title>
      <meta name="description" content="My Portfolio" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
    </Head>
    <Header/>
    <Component {...pageProps} />

    {/* <footer className={styles.footer}>
    </footer> */}
  </div>
  )
}
