
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss'
import iconMap from 'utilities/iconMap';
import clsx from 'clsx';

export default function Intro({openHeader, setOpenHeader}: {openHeader: boolean, setOpenHeader: any}) {

  return (
    //@ts-ignore
    <div id="mobile-navigation" className={clsx(styles['mobileNavigation'], openHeader&& styles['opened'])} onClick={()=> setOpenHeader(prev => !prev)}>
      {openHeader?
      <FontAwesomeIcon className={styles.icon} icon={iconMap['close']}/>
      :
      <FontAwesomeIcon className={styles.icon} icon={iconMap['menu']}/>
      }
    </div>
  )
}
