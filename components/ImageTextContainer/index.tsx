import styles from './index.module.scss'
import DynamicImage from 'utilities/DynamicImage';

export default function ImageTextContainer({data={image: {imageName: "", alt: "", width: 500, height: 500}, text: ""}}) {
  const {image, text} = data;
  const { imageName, alt, width, height } = image;

  return (
    <div className={styles.imageTextContainer}>
      <DynamicImage imageName={imageName} customClassName={styles.sideImage} alt={alt} width={width} height={height} />
      <p className={styles.sideText}>{text}</p>
    </div>
  )
}
