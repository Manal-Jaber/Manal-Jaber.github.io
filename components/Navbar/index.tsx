
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {

  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            Landing
          </Link>
        </li>
        <li>
          <Link href="/details-page">
            detailsPage
          </Link>
        </li>
      </ul>
    </div>
  )
}
