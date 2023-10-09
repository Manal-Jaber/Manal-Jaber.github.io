
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss';
import Link from 'next/link'
import { faTwitter, faFacebookF, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Social() {

  return (
    <ul className={styles.social} id='social'>
      <li>
        <Link href="#">
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FontAwesomeIcon className={styles.icon} icon={faDribbble} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </Link>
      </li>
    </ul>
  )
}
