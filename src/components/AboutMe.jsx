"use client";
import CustomImage from "@/subcomponents/CustomImage";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [data, setData] = useState(null);
  const [mouseOver, setMouseOver] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/Home.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isMounted) return null;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data?.about) return null;

  return (
    <ul className="about-me flex flex-col gap-12 font-Preahvihear text-white">
      {data.about.map((item, index) => {
        const { title, description, details, skills } = item;
        return (
          <li key={`about-item-${index}`} className="flex flex-row gap-2">
            <div className="flex flex-col gap-12 max-w-xl 2xl:max-w-2xl">
              <div
                onMouseEnter={() => setMouseOver(index)}
                onMouseLeave={() => setMouseOver(null)}
              >
                <p className="text-2xl">
                  {title}{" "}
                  <span
                    className="animate-ticker"
                    style={{
                      visibility: mouseOver === index ? "visible" : "hidden",
                    }}
                  >
                    |
                  </span>
                </p>
                <p>{description}</p>
              </div>
              <p>{details}</p>
            </div>
            {skills && (
              <ul className="flex flex-col gap-2 w-full">
                {skills.map((skill, skillIndex) => {
                  const { category, list } = skill;
                  return (
                    <li
                      key={`skill-${skillIndex}`}
                      className="flex flex-row flex-wrap justify-evenly"
                    >
                      {list?.map((item, itemIndex) => {
                        const { label, icon } = item;
                        return (
                          <div
                            key={`skill-item-${itemIndex}`}
                            className="flex flex-col items-center gap-2 h-fit w-1/5"
                          >
                            <CustomImage img={icon} className="h-12 w-12" />
                            <span className="text-xs">{label}</span>
                          </div>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export { AboutMe };
