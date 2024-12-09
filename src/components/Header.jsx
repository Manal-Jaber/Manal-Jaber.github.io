"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  // Handling scroll events
  const [data, setData] = useState([]);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // JSON
  useEffect(() => {
    fetch("/data/Header.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const {
    image = { src: "/avatars/manal.webp", alt: "", width: 0, height: 0 },
    name = "",
    navbarData = [],
  } = data;

  if (!data) return null;

  return (
    <header
      className={`${
        isScrollingUp ? "fixed" : "absolute"
      } top-0 z-50 flex w-full flex-row items-center justify-between bg-header p-4 md:px-10`}
    >
      <Link href="/" className="flex flex-row items-center gap-4">
        <h1 className="font-Preahvihear text-xl ">{name}</h1>
        <Image
          src={image?.src}
          alt={image?.alt}
          width={image?.width}
          height={image?.height}
          unoptimized
        />
      </Link>
      <section className="sections flex flex-row gap-4 md:gap-20">
        {navbarData?.map((item, index) => {
          const { label, href } = item;
          return (
            <Link key={index} href={href}>
              {label}
            </Link>
          );
        })}
      </section>
    </header>
  );
};
export { Header };
