"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    borderBottom: "1px solid rgba(0,212,170,0.12)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    background: scrolled ? "rgba(4,13,26,0.97)" : "rgba(4,13,26,0.85)",
    transition: "background 0.3s ease",
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: "Syne, sans-serif",
    fontWeight: 800,
    fontSize: "1.2rem",
    color: "#00d4aa",
    textDecoration: "none",
    letterSpacing: "-0.02em",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#8ba3c7",
    textDecoration: "none",
    transition: "color 0.2s",
    fontFamily: "DM Sans, sans-serif",
  };

  const githubBtnStyle: React.CSSProperties = {
    padding: "8px 18px",
    borderRadius: "8px",
    background: "#00d4aa",
    color: "#040d1a",
    fontWeight: 600,
    fontSize: "0.8rem",
    textDecoration: "none",
    fontFamily: "DM Sans, sans-serif",
  };

  const iconBtnStyle: React.CSSProperties = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "1px solid rgba(0,212,170,0.2)",
    background: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8ba3c7",
  };

  return (
    React.createElement(motion.nav, {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      style: navStyle,
    },
      // Logo
      React.createElement("a", { href: "#", style: logoStyle },
        "SA",
        React.createElement("span", { style: { color: "#f0a500" } }, ".")
      ),

      // Desktop links
      React.createElement("ul", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        },
        className: "nav-desktop"
      },
        ...navLinks.map(link =>
          React.createElement("li", { key: link.href },
            React.createElement("a", { href: link.href, style: linkStyle }, link.label)
          )
        ),
        React.createElement("li", null,
          React.createElement("a", {
            href: "https://github.com/sindrella-45",
            target: "_blank",
            rel: "noopener noreferrer",
            style: githubBtnStyle
          }, "GitHub")
        )
      ),

      // Right controls
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px" } },
        React.createElement("button", { onClick: toggleTheme, style: iconBtnStyle, "aria-label": "Toggle theme" },
          theme === "dark"
            ? React.createElement(Sun, { size: 16 })
            : React.createElement(Moon, { size: 16 })
        ),
        React.createElement("button", {
          onClick: () => setMobileOpen(p => !p),
          style: { ...iconBtnStyle, borderRadius: "8px", display: "flex" },
          className: "hamburger-btn",
          "aria-label": "Toggle menu"
        },
          mobileOpen
            ? React.createElement(X, { size: 20 })
            : React.createElement(Menu, { size: 20 })
        )
      ),

      // Mobile menu
      React.createElement(AnimatePresence, null,
        mobileOpen && React.createElement(motion.div, {
          key: "mobile-menu",
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          style: {
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "#070f1f",
            borderBottom: "1px solid rgba(0,212,170,0.1)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }
        },
          ...navLinks.map(link =>
            React.createElement("a", {
              key: link.href,
              href: link.href,
              onClick: () => setMobileOpen(false),
              style: linkStyle
            }, link.label)
          ),
          React.createElement("a", {
            href: "https://github.com/sindrella-45",
            target: "_blank",
            rel: "noopener noreferrer",
            style: githubBtnStyle
          }, "GitHub")
        )
      )
    )
  );
}
