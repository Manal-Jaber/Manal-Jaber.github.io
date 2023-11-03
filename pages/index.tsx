import TitleTag from 'components/TitleTag'
import ImageTextContainer from 'components/ImageTextContainer';
import styles from '../styles/App.module.scss'
import data from "assets/data/HomePage.json"

export default function Home() {
  const {titleTagText, imageTextContainerData} = data
  return (
    <div className={styles.container}>
      <TitleTag title={titleTagText}/>
      <ImageTextContainer data={imageTextContainerData}/>
    </div>
  )
}
