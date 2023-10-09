
import styles from './index.module.scss'
import Image from 'next/image';
import code from "assets/images/code.png";

export default function Intro() {

  return (
    <div id="intro" className={styles.intro}>
      <Image src={code} className={styles.image} alt="" />
      <h1 id="title">Manal Jaber</h1>
      <p>Software Engineer</p>
    </div>
  )
}
