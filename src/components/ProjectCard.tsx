"use client";

import type React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export default function ProjectCard({
  title,
  description,
  link,
  icon,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 p-3 bg-gray-100 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="mb-6 text-gray-600">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
      >
        En savoir plus
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
