import Link from 'next/link';
import styles from './index.module.scss'
import DynamicImage from 'utilities/DynamicImage';
import clsx from 'clsx';

export default function ProjectDisplayComponent({data={image: {imageName: "", alt: "", width: 500, height: 500}, title: "", description: "", slug:"", row: true}}) {
  const {image, title, description, slug, row} = data;
  const { imageName, alt, width, height } = image;

  return (
    <Link href={`/projects/${slug}`} className={clsx(styles['projectDisplayComponent'],row&& styles['row'])}>
      <DynamicImage imageName={`projects/${imageName}`} customClassName={styles.image} alt={alt} width={width} height={height} />
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
}
