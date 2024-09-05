import React from "react";
import { Button } from "../ui/button";

export default function LogInForm() {
  return (
    <>
      <form className="flex flex-col items-center w-[80%] gap-2 mx-auto">
        <input type="email" required name="email" placeholder="Email" />
        <input
          type="password"
          required
          name="password"
          placeholder="Password"
        />
        <Button type="button" className="w-full">
          로그인/로그아웃
        </Button>
      </form>
    </>
  );
}
