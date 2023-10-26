
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss'
import data from 'assets/data/Header.json'
import iconMap from 'utilities/iconMap';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {

  const router = useRouter();

  // Handling clicking the links

  const [clicked, setClicked] = useState(0);
  const handleClick = (href: string, id: number) => {
    setClicked(id);
    router.push(href)
  }

  return (
    <nav className={styles.navbar} id='nav'>
      <ul>
        {data?.navbarData?.map((element:any, id: number) => {
          const {label, icon, href="#"} = element
          return (
            <li key={id} className={clsx(clicked===id && styles.active)}onClick={()=> handleClick(href, id)}>
              <Link href={href}>
                {label}
                {/* @ts-ignore */}
                <FontAwesomeIcon className={`${styles.icon} icon`} icon={iconMap[icon]}/>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
