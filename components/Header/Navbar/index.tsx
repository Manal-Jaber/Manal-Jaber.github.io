
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss'
import data from 'assets/data/Header.json'
import iconMap from 'utilities/iconMap';

export default function Navbar() {

  const router = useRouter();


  const handleClick = (href: string) => {
    router.push(href)
  }

  return (
    <nav className={styles.navbar} id='nav'>
      <ul>
        {data?.navbarData?.map((element:any, id: number) => {
          const {label, icon, href="#"} = element
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
