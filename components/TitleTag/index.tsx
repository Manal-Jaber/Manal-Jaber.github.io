import Image from 'next/image'
import styles from './index.module.scss'
import paper from 'public/images/paper.webp'
import arrow from 'public/images/arrow.png'

export default function TitleTag({title=""}) {

  return (
  <div id='titleTag' className={styles.titleTag}>
    <Image className={styles.paper} src={paper} alt="paper" width={50} height={100}/>
    {title &&
      <p className={styles.title}>{title}</p>
    }
    <Image className={styles.arrow} src={arrow} alt="arrow" width={40}/>
  </div>
  )
}
