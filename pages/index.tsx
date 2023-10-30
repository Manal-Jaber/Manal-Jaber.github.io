import TitleTag from 'components/TitleTag'
import styles from '../styles/App.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <TitleTag title='Get To Know Me'/>
      <h1>Landing</h1>
    </div>
  )
}
