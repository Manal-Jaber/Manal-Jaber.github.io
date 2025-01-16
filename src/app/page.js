"use client";

import { AboutMe } from "@/components/AboutMe";
import Intro from "@/components/Intro";
export default function Page() {
  return (
    <div className="relative mx-auto mt-36 h-max w-3/4 touch-auto pb-12">
      <Intro />
      <AboutMe />
    </div>
  );
}
