import TitleTag from 'components/TitleTag'
import ProjectDisplayComponent from 'components/ProjectDisplayComponent';
import styles from '../styles/pages/Projects.module.scss';
import data from "assets/data/ProjectsPage.json"

export default function Projects() {
  const {titleTagText, projectsData} = data
  return (
    <div className={styles.container}>
      <TitleTag title={titleTagText}/>
      <ul className={styles.projectsList}>
        {projectsData?.map((project, index) => {
          return (
            <li className={styles.project} key={index}>
              <ProjectDisplayComponent data={project}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}