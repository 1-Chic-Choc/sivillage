"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function TestAccountSignIn() {
  useEffect(() => {
    signIn("credentials", {
      email: "test1@test.com",
      password: "testtest123",
      redirect: true,
    });
  }, []);
  return <div>TestAccountSignIn</div>;
}
