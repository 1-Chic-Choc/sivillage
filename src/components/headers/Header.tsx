"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps): JSX.Element {
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
  }, []);

  const className = cn("sticky", "w-full", "bg-white", isVisible && "top-0");

  return <header className={className}>{children}</header>;
}
