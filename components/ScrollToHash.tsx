"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on home page
    if (pathname !== "/") return;

    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}

