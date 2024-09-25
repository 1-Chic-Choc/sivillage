"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  const handleClick = () => signOut({ callbackUrl: "/" });

  return (
    <div>
      <Button type="button" onClick={handleClick}>
        로그아웃
      </Button>
    </div>
  );
}
