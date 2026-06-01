"use client";

import { motion } from "framer-motion";
import { SkillCategory as SkillCategoryType } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

const variantStyles = {
  teal: {
    icon: "dark:bg-teal/10 bg-teal-dark/10 dark:border-teal/20 border-teal-dark/20",
    pill: "dark:bg-teal/5 bg-teal-dark/5 dark:border-teal/15 border-teal-dark/15 dark:hover:bg-teal/10 hover:bg-teal-dark/10 dark:hover:border-teal/30 hover:border-teal-dark/30 dark:hover:text-teal hover:text-teal-dark",
  },
  gold: {
    icon: "dark:bg-gold/10 bg-gold-dark/10 dark:border-gold/20 border-gold-dark/20",
    pill: "dark:bg-gold/5 bg-gold-dark/5 dark:border-gold/15 border-gold-dark/15 dark:hover:bg-gold/10 hover:bg-gold-dark/10 dark:hover:border-gold/30 hover:border-gold-dark/30 dark:hover:text-gold hover:text-gold-dark",
  },
  blue: {
    icon: "dark:bg-blue-500/10 bg-blue-500/10 dark:border-blue-500/20 border-blue-500/20",
    pill: "dark:bg-blue-500/5 bg-blue-500/5 dark:border-blue-500/15 border-blue-500/15 dark:hover:bg-blue-500/10 hover:bg-blue-500/10 dark:hover:border-blue-500/30 hover:border-blue-500/30 dark:hover:text-blue-400 hover:text-blue-600",
  },
};

export function SkillCategory({ category, index }: SkillCategoryProps) {
  const styles = variantStyles[category.variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cn(
        "rounded-2xl p-6 border transition-all duration-300",
        "dark:bg-navy-card bg-white",
        "dark:border-white/10 border-black/10",
        "dark:hover:border-white/20 hover:border-black/20",
        "dark:backdrop-blur-md"
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center text-lg border",
            styles.icon
          )}
        >
          {category.icon}
        </div>
        <h3 className="font-display font-semibold text-base dark:text-white text-slate-900">
          {category.name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={cn(
              "text-xs font-mono px-3 py-1.5 rounded-full border cursor-default",
              "dark:text-slate-400 text-slate-600 transition-all duration-200",
              styles.pill
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}