"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {

    // Handling scroll events
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < prevScrollY) {
                setIsScrollingUp(true);
            } else {
                setIsScrollingUp(false);
            }
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    return <header className={`${isScrollingUp ? 'fixed' : 'absolute'} top-0 z-50 flex w-full flex-row items-center justify-between bg-header p-4 md:px-10`}>
        <Link href='/' className="flex flex-row items-center gap-4">
            <h1 className="font-Preahvihear text-xl ">Manal Jaber</h1>
            <Image src={'/avatars/manal.webp'} alt="manal" width={60} height={60} />
        </Link>
        <section className="sections flex flex-row gap-4 md:gap-20">
            <Link href='/'>About Me</Link>
            <Link href='/'>Work</Link>
            <Link href='/'>Interests</Link>
            <Link href='/'>Articles</Link>
        </section>
    </header>
}
export { Header };