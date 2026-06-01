"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  label: string;
  title: React.ReactNode;
  className?: string;
}

export function SectionLabel({
  number,
  label,
  title,
  className,
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <span className="font-mono text-xs text-teal dark:text-teal uppercase tracking-widest block mb-2">
        {number} / {label}
      </span>
      <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight dark:text-white text-slate-900 mb-4 leading-tight">
        {title}
      </h2>
      <div className="w-14 h-0.5 bg-gradient-to-r from-teal to-gold rounded-full mb-10" />
    </motion.div>
  );
}