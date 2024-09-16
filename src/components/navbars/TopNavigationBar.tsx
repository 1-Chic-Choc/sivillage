"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface GlobalNavigationBarProps {
  className?: string;
  children: React.ReactNode;
}

export default function GlobalNavigationBar({
  className,
  children,
}: GlobalNavigationBarProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    setLastScrollY((lastScrollY) => {
      setIsVisible(window.scrollY < lastScrollY);
      return window.scrollY;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "sticky w-full bg-white",
        className,
        isVisible ? "top-14" : "top-0",
      )}
    >
      {children}
    </nav>
  );
}
