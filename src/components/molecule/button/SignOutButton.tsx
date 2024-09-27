"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignOutButton({ className }: { className?: string }) {
  const handleClick = () => signOut({ callbackUrl: "/" });

  return (
    <Button type="button" className={className} onClick={handleClick}>
      로그아웃
    </Button>
  );
}
