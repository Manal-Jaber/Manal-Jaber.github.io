"use client";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [data, setData] = useState([]);

  // JSON
  useEffect(() => {
    fetch("/data/Home.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const aboutItems = data?.about;

  if (!data) return null;
  return (
    <ul className="about-me flex max-w-2xl flex-col gap-12 font-Preahvihear text-white">
      {aboutItems?.map((item, index) => {
        const { title, description, details } = item;
        return (
          <li key={index} className="flex flex-col gap-12">
            <div>
              <p className="text-2xl">
                {title} <span className="animate-ticker">|</span>
              </p>
              <p>{description}</p>
            </div>
            <p>{details}</p>
          </li>
        );
      })}
    </ul>
  );
};
export { AboutMe };
