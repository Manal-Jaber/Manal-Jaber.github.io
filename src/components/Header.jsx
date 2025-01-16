"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const Header = () => {
  const [data, setData] = useState(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrollingUp(currentScrollY < prevScrollY);
    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  // Scroll effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/Header.json");
        if (!response.ok) {
          throw new Error("Failed to fetch header data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching header data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Early returns
  if (!isMounted) return null;
  if (isLoading) return <div>Loading...</div>; // Consider using a skeleton loader
  if (error) return <div>Error loading header</div>;
  if (!data) return null;

  const {
    image = {
      src: "/avatars/manal.webp",
      srcStatic: "/avatars/manal-static.webp",
      alt: "",
      width: 0,
      height: 0,
    },
    name = "",
    navbarData = [],
  } = data;

  return (
    <header
      className={`${
        isScrollingUp ? "fixed" : "absolute"
      } top-0 z-50 flex w-full flex-row items-center justify-between bg-header p-4 md:px-10`}
    >
      <Link
        href="/"
        className="flex flex-row items-center gap-4"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <h1 className="font-Preahvihear text-xl">{name}</h1>
        <Image
          src={mouseOver && isMounted ? image.src : image.srcStatic}
          alt={image?.alt || ""}
          width={image?.width || 0}
          height={image?.height || 0}
          unoptimized
          priority // Add priority for above-the-fold images
        />
      </Link>
      <nav
        className="sections flex flex-row gap-4 md:gap-20"
        aria-label="Main navigation"
      >
        {navbarData?.map((item, index) => {
          const { label, href } = item;
          return (
            <Link
              key={`nav-${href}-${index}`}
              href={href}
              className="hover:opacity-80 transition-opacity"
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

// Optional: Add display name for debugging
Header.displayName = "Header";

export { Header };
