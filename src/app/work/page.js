"use client";
import { Project } from "@/components/Project";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);
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
        const response = await fetch("/data/Work.json");
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
  if (!data?.projects) return null;

  return (
    <div className="relative mx-auto mt-36 h-full w-3/4 touch-auto">
      <h1 className="text-3xl mb-8">Check my latest projects</h1>
      <ul className="grid grid-cols-3 gap-14">
        {data?.projects?.map((project, index) => {
          return (
            <li key={index}>
              <Project project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
