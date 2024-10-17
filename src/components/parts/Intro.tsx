import Image from "next/image";

const Intro = () => {
    return <div className='relative max-w-fit'>
        <Image src="/gradients/profile.svg" alt="" width={300} height={200} />

        <Image src="/avatars/with-laptop.png" alt="laptop" width={240} height={240} className='absolute left-1/2 top-1/2 z-10 -translate-y-1/2 translate-x-[-60%]' />
    </div>
}
export default Intro;