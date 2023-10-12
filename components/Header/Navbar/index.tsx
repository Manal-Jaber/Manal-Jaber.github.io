
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import webClipper from "assets/images/page-clipper.png";
import code from "assets/images/code.png";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from "assets/data/Navbar.json"
import iconMap from 'utilities/iconMap';

export default function Navbar() {

  const router = useRouter();


  const handleClick = (href: string) => {
    router.push(href)
  }

  return (
    <nav className={styles.navbar} id='nav'>
      <ul>
        {data?.navbarData?.map((element, id) => {
          const {label, icon, href} = element
          return (
            <li key={id}>
              <Link href={href} onClick={() => handleClick(href)}>
                {label}
                {/* @ts-ignore */}
                <FontAwesomeIcon className={styles.icon} icon={iconMap[icon]}/>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
