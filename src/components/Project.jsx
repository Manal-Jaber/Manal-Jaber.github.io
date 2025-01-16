import CustomImage from "@/subcomponents/CustomImage";
import Link from "next/link";

const Project = ({ project }) => {
  const { image = {}, title = "", description = "", href } = project;
  return (
    <Link href={href} className="flex flex-col">
      <div className="flex flex-col bg-white rounded px-4 py-1">
        <CustomImage img={image} className="h-52 w-auto object-scale-down" />
      </div>
      <h2 className="text-2xl">{title}</h2>
      <p className="">{description}</p>
    </Link>
  );
};
export { Project };
