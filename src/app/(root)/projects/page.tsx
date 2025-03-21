"use client";
import { motion } from "motion/react";
import { projects as projectsData } from "../../../data/projects";
import Project from "@/components/Project";
import { recoletaBold } from "@/font";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Projects() {
  return (
    <>
      <h1
        className={`text-5xl mt-12 text-primary dark:text-gray-200 ${recoletaBold.className}`}
      >
        Projects
      </h1>
      <section className="dark:text-gray-300 text-gray-800 sm:h-[100px]">
        <motion.section
          className="flex justify-start flex-wrap gap-2 lg:gap-5 lg:mt-7 mt-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((props, i) => (
            <motion.article key={i} className="item" variants={item}>
              <Project key={props.repoUrl} {...props} />
            </motion.article>
          ))}
        </motion.section>
      </section>
    </>
  );
}
