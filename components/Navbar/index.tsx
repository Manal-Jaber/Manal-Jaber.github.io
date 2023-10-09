
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import webClipper from "assets/images/page-clipper.png";
import code from "assets/images/code.png";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faTh, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

  const router = useRouter();

  return (
    <nav className={styles.navbar} id='nav'>
      <ul>
        <li>
          <Link href="/">
            Intro
            <FontAwesomeIcon className={styles.icon} icon={faHome} />
          </Link>
        </li>
        <li>
          <Link href="/details-page">
            Portfolio
            <FontAwesomeIcon className={styles.icon} icon={faTh} />
          </Link>
        </li>
        <li>
          <Link href="/details-page">
            About Me
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
          </Link>
        </li>
        <li>
          <Link href="/details-page">
            Contact
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
