"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/buttons";
import { ArrowRight } from "lucide-react";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";

interface Tech {
  name: string;
  icon: string; // Path to the icon in public folder
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  time: string;
  techStack: Tech[];
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
  time,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <p className="text-sm text-slate-500 mb-2">{time}</p>
      <p className="text-base text-slate-700 dark:text-slate-300 mb-4">{description}</p>

      <div className="rounded-lg overflow-hidden mb-4">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={title}
            width={900}
            height={500}
            className="w-full h-auto object-cover rounded-lg transition hover:scale-105"
          />
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, idx) => (
          <Badge key={idx} className=" flex items-center gap-1 px-2 py-1">
            <Image src={tech.icon} alt={tech.name} width={16} height={16} />
            <span className="text-xs">{tech.name}</span>
          </Badge>
        ))}
      </div>
      <Link href={link} target="_blank">
        <Button className="gap-x-2 mt-8 cursor-pointer">
          <FaLink className="w-[1.2rem] h-[1.2rem]" />
          Visit website
          <ArrowRight className="w-[1.2rem] h-[1.2rem]" />      
        </Button>
      </Link>
    </div>
  );
}
