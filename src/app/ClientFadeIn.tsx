"use client";
import { useEffect } from "react";

export default function ClientFadeIn() {
  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      document.documentElement.classList.add("js-loaded");
      sessionStorage.setItem("visited", "true");
    } else {
      document.documentElement.style.opacity = "1";
    }
  }, []);

  return null;
}