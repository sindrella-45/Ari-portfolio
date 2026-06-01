"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function GithubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      className="w-8 h-8 rounded-lg border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:text-teal-dark dark:hover:text-teal dark:hover:border-teal/30 hover:border-teal-dark/30 transition-all"
    >
      <Github size={14} />
    </a>
  );
}

function LiveLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Live Demo"
      className="w-8 h-8 rounded-lg border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:text-teal-dark dark:hover:text-teal dark:hover:border-teal/30 hover:border-teal-dark/30 transition-all"
    >
      <ExternalLink size={14} />
    </a>
  );
}

function NoLink() {
  return (
    <div className="w-8 h-8 rounded-lg border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-slate-600 text-slate-400">
      <Lock size={14} />
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const githubHref = project.github;
  const liveHref = project.live;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col rounded-2xl p-6 border transition-all duration-300",
        "dark:bg-navy-card dark:border-white/10 bg-white border-black/10",
        "dark:hover:border-teal/30 hover:border-teal-dark/30",
        "dark:backdrop-blur-md",
        "hover:shadow-lg dark:hover:shadow-teal/5 hover:shadow-teal-dark/5"
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal to-gold rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl dark:bg-teal/10 bg-teal-dark/10 dark:border dark:border-teal/20 border border-teal-dark/20">
          {project.icon}
        </div>

        <div className="flex gap-2">
          {githubHref ? (
            <GithubLink href={githubHref} />
          ) : (
            <NoLink />
          )}

          {liveHref ? <LiveLink href={liveHref} /> : null}
        </div>
      </div>

      <h3 className="font-display font-bold text-lg dark:text-white text-slate-900 mb-1">
        {project.name}
      </h3>

      <p className="font-mono text-xs text-teal dark:text-teal mb-3">
        {project.subtitle}
      </p>

      <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 rounded-full dark:bg-teal/5 bg-teal-dark/5 dark:border dark:border-white/10 border border-black/10 dark:text-slate-400 text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}