
import styles from './index.module.scss'
import MobileNavigation from 'components/Header/MobileNavigation'
import Navbar from 'components/Header/Navbar'
import Intro from 'components/Header/Intro'
import Social from 'components/Header/Social'
import { useState } from 'react'
import clsx from 'clsx'

export default function Header() {
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <header id='header' className={clsx(styles['header'], !openHeader&& styles['closed'])}>
      <MobileNavigation openHeader= {openHeader} setOpenHeader= {setOpenHeader}/>
      <div className={styles['header-menu']}>
        <Intro/>
        <Navbar/>
        <Social/>
      </div>
    </header>
  )
}
