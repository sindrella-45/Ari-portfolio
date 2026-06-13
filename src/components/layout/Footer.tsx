"use client";

import React from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: "https://github.com/sindrella-45" },
];

export function Footer() {
  return React.createElement("footer", { className: "footer-root" },
    React.createElement("div", { className: "footer-brand" }, "SINDRELLA ACEN_"),
    React.createElement("div", { className: "footer-tagline" }, '"Building intelligent systems that transform ideas into impact."'),
    React.createElement("div", { className: "footer-links" },
      ...links.map(l =>
        React.createElement("a", {
          key: l.href,
          href: l.href,
          target: l.href.startsWith("http") ? "_blank" : undefined,
          rel: l.href.startsWith("http") ? "noopener noreferrer" : undefined,
        }, l.label)
      )
    )
  );
}
