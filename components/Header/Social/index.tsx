import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss';
import data from 'assets/data/Header.json'
import iconMap from 'utilities/iconMap';

export default function Social() {
  return (
    <ul className={styles.social} id='social'>
      {data?.socialData?.map((element: any, id: number) => {
        const {label, icon, href="#"} = element;
        return (
          <li key={id}>
            <Link href={href}>
              {icon?
               //@ts-ignore
               <FontAwesomeIcon className={styles.icon} icon={iconMap[icon]}/>
               :
               label
              }
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
