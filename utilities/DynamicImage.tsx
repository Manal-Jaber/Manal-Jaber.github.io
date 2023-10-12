import Image from "next/image";

interface DynamicImageType{
  customClassName?: string;
  imageName?: string;
  src?: any;
  alt?: string;
  height?: number;
  width?: number;
}

function DynamicImage({ customClassName="", imageName, src, alt="", height=500, width=500 }: DynamicImageType) {
  const localSrc = (`/images/${imageName}`)
    return <Image className={customClassName} src={localSrc || src} alt={alt} width={width} height={height}/>;
}

export default DynamicImage;

