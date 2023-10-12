
import styles from './index.module.scss'
import Navbar from 'components/Header/Navbar'
import Intro from 'components/Header/Intro'
import Social from 'components/Header/Social'

export default function Header() {

  return (
  <header id='header' className={styles.header}>
    <Intro/>
    <Navbar/>
    <Social/>
  </header>
  )
}
