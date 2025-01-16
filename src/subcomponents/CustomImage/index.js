const { default: Image } = require("next/image")

const CustomImage = ({img={}, className=""}) => {
    const {src="", alt="", width={}, height={} } = img;
    return <Image className={className} src={src} alt={alt} width={width} height={height}/>
}
export default CustomImage