
import styles from './index.module.scss'
import DynamicImage from 'utilities/DynamicImage';
import data from "assets/data/Header.json"

export default function Intro() {
  const { logo , name, title } = data?.introData;
  const { imageName, alt } = logo;

  return (
    <div id="intro" className={styles.intro}>
      <DynamicImage imageName={imageName} customClassName={styles.image} alt={alt} />
      <h1 id="title">{name}</h1>
      <p>{title}</p>
    </div>
  )
}
