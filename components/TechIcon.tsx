"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface TechIconProps {
  name: string;
  size?: number;
}

const iconMap: Record<string, any> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Java: FaJava,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  AWS: SiAmazon,
  Git: SiGit,
};

const colorMap: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  Java: "#007396",
  Python: "#3776AB",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Docker: "#2496ED",
  AWS: "#FF9900",
  Git: "#F05032",
};

export default function TechIcon({ name, size = 48 }: TechIconProps) {
  const Icon = iconMap[name];
  const color = colorMap[name];

  if (!Icon) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span className="text-4xl">{name.charAt(0)}</span>
      </div>
    );
  }

  return (
    <Icon
      size={size}
      style={{ color }}
      className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_currentColor]"
    />
  );
}

