"use client";

import React from "react";

const items = [
  "LangGraph","Retrieval-Augmented Generation","OpenAI API","FastAPI",
  "Vector Databases","AI Agents","LangChain","Semantic Search","Next.js","Supabase",
  "LangGraph","Retrieval-Augmented Generation","OpenAI API","FastAPI",
  "Vector Databases","AI Agents","LangChain","Semantic Search","Next.js","Supabase",
];

export function Marquee() {
  return React.createElement("div", { className: "marquee-wrap" },
    React.createElement("div", { className: "marquee" },
      ...items.map((item, i) =>
        React.createElement("span", { key: i, className: "marquee-item" }, item)
      )
    )
  );
}
