"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return React.createElement("nav", { className: `nav-root${scrolled ? " scrolled" : ""}` },

    // Logo
    React.createElement("a", { href: "#", className: "nav-logo" }, "SA_"),

    // Desktop links
    React.createElement("ul", { className: "nav-links" },
      ...links.map(l =>
        React.createElement("li", { key: l.href },
          React.createElement("a", { href: l.href }, l.label)
        )
      ),
      React.createElement("li", null,
        React.createElement("a", {
          href: "https://github.com/sindrella-45",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-main",
          style: { padding: "8px 18px", fontSize: "0.75rem" }
        }, "GitHub ↗")
      )
    ),

    // Theme toggle
    React.createElement("button", {
      onClick: toggleTheme,
      style: { background: "none", border: "1px solid var(--border)", color: "var(--muted)", cursor: "pointer", padding: "6px 12px", fontFamily: "Space Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.08em" }
    }, theme === "dark" ? "☀ LIGHT" : "☾ DARK")
  );
}
