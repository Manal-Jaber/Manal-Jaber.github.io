"use client";

import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import Intro from "@/components/Intro";
export default function Page() {
  return (
    <div className="">
      <Header />
      <div className="relative mx-auto mt-36 h-full w-3/4 touch-auto">
        <Intro />
        <AboutMe />
      </div>
    </div>
  );
}
