"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import React from "react";

const linkStyle = (variant: "primary" | "outline" | "gold"): React.CSSProperties => {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "0.875rem",
    textDecoration: "none",
    cursor: "pointer",
  };
  if (variant === "primary") return { ...base, background: "#00d4aa", color: "#040d1a" };
  if (variant === "gold") return { ...base, border: "1px solid rgba(240,165,0,0.3)", color: "#f0a500" };
  return { ...base, border: "1px solid rgba(255,255,255,0.2)", color: "#e8f0fe" };
};

const chipStyle = (gold = false): React.CSSProperties => ({
  background: "rgba(11,22,40,0.95)",
  border: `1px solid ${gold ? "rgba(240,165,0,0.3)" : "rgba(0,212,170,0.3)"}`,
  borderRadius: "8px",
  padding: "6px 12px",
  fontSize: "0.75rem",
  fontFamily: "monospace",
  color: gold ? "#f0a500" : "#00d4aa",
  whiteSpace: "nowrap" as const,
});

export function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "#040d1a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      {/* Orb 1 */}
      <div style={{ position: "absolute", top: "-200px", right: "-150px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(0,212,170,0.18)", filter: "blur(100px)", pointerEvents: "none" }} />

      {/* Orb 2 */}
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(240,165,0,0.12)", filter: "blur(80px)", pointerEvents: "none" }} />

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,170,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      {/* Main content */}
      <div
        className="hero-grid"
        style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem", width: "100%" }}
      >
        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "100px", padding: "6px 16px", border: "1px solid rgba(0,212,170,0.3)", background: "rgba(0,212,170,0.08)", width: "fit-content" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00d4aa", display: "inline-block" }} />
            <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#00d4aa", letterSpacing: "0.08em" }}>
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, background: "linear-gradient(135deg, #ffffff 0%, #00d4aa 55%, #f0a500 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Sindrella<br />Acen
          </h1>

          {/* Subtitle */}
          <p style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#f0a500", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
            AI Engineer &nbsp;·&nbsp; LLM Developer &nbsp;·&nbsp; RAG &amp; Agents
          </p>

          {/* Description */}
          <p style={{ fontSize: "1.05rem", color: "#8ba3c7", lineHeight: 1.75, margin: 0, maxWidth: "480px" }}>
            Building intelligent systems that solve real-world problems through AI, Retrieval-Augmented Generation, and Agentic Workflows.
          </p>

          {/* CTA Buttons — using React.createElement to avoid tag stripping */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
            {React.createElement("a", { href: "#projects", style: linkStyle("primary") }, "View Projects")}
            {React.createElement("a", { href: "#contact", style: linkStyle("outline") }, "Contact Me")}
            {React.createElement("a", { href: "/resume.pdf", style: linkStyle("gold") },
              React.createElement(Download, { size: 15 }),
              " Download CV"
            )}
          </div>
        </motion.div>

        {/* RIGHT — Profile */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div style={{ position: "relative", width: "320px", height: "320px" }}>

            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: "-20px", borderRadius: "50%", border: "1px solid rgba(0,212,170,0.2)" }}
            >
              <div style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#00d4aa", top: "50%", left: "-5px", transform: "translateY(-50%)", boxShadow: "0 0 12px #00d4aa" }} />
            </motion.div>

            {/* Dashed ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", inset: "-40px", borderRadius: "50%", border: "1px dashed rgba(240,165,0,0.15)" }}
            />

            {/* Photo */}
            <div style={{ width: "320px", height: "320px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(0,212,170,0.3)", position: "relative" }}>
              {React.createElement("img", {
                src: "/profile.png",
                alt: "Sindrella Acen",
                style: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }
              })}
            </div>

            {/* Chip — LangGraph */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }} style={{ position: "absolute", top: "8px", right: "-80px", zIndex: 10 }}>
              <div style={chipStyle(false)}>🤖 LangGraph</div>
            </motion.div>

            {/* Chip — FastAPI */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} style={{ position: "absolute", bottom: "40px", left: "-80px", zIndex: 10 }}>
              <div style={chipStyle(true)}>⚡ FastAPI</div>
            </motion.div>

            {/* Chip — RAG Systems */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} style={{ position: "absolute", top: "50%", right: "-90px", transform: "translateY(-50%)", zIndex: 10 }}>
              <div style={chipStyle(false)}>🧠 RAG Systems</div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
      >
        <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#4d6b8c", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} style={{ color: "#4d6b8c" }} />
        </motion.div>
      </motion.div>

    </section>
  );
}
