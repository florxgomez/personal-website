"use client";
import { motion } from "framer-motion";
import { projects as projectsData } from "../../data/projects";
import Project from "@/components/Project";

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
      <h1 className="text-4xl mt-12 font-bold text-primary dark:text-gray-200">
        Projects
      </h1>
      <section className="mt-16 dark:text-gray-300 text-gray-800">
        <motion.section
          className="flex justify-center sm:justify-start flex-wrap gap-5 mt-10"
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
