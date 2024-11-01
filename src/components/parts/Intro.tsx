import Image from "next/image";

const Intro = () => {
    return <div className="intro relative flex max-w-2xl flex-row">
        <div className='relative min-w-fit'>
            <Image src="/gradients/profile.svg" alt="" width={300} height={431} />

            <Image src="/avatars/with-laptop.png" alt="laptop" width={240} height={240} className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2' />
        </div>
        <div className="absolute right-0 top-0 z-10 flex translate-x-[-10%] translate-y-1/4 flex-row items-start gap-2">
            <Image src="/icons/arrow.svg" className="mt-3" alt="" width={78.34} height={47.82} />
            <div className="flex max-w-xs flex-col gap-1 font-Preahvihear text-white">
                <p className="text-sm">Hello I am <span className="text-purple">Manal Jaber-Shehayeb</span></p>
                <p className="text-sm">Curious Child</p>
                <p className="text-xl">Astonished by the <span className="bg-[url('/vectors/Ellipse.svg')] bg-contain bg-center bg-no-repeat px-4 text-purple">World</span>...</p>
                <p className="text-sm">Because i have not yet become world-weary</p>
                <p className="text-center text-[10px] font-light italic text-purple">inspired by Sophie's World - Jostein Gaarder</p>
            </div>

        </div>
    </div>
}
export default Intro;