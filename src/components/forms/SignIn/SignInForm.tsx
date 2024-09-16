"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInSchema } from "@/components/forms/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormSection from "../FormSection";
import { CheckboxFieldData, InputFieldData } from "../form-interface";
import InputWithClear from "../../inputs/InputWithClear";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputFieldDatas: InputFieldData[] = [
  {
    name: "email",
    inputElement: InputWithClear,
    placeholder: "아이디(이메일주소)",
  },
  {
    name: "password",
    inputElement: InputWithClear,
    placeholder: "비밀번호",
    props: { type: "password" },
  },
];

const checkboxFieldDatas: CheckboxFieldData[] = [
  {
    id: "autoLogin",
    name: "autoLogin",
    label: "자동로그인",
  },
];

export default function SignInForm() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      autoLogin: [],
    },
  });
  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormSection {...{ form, inputFieldDatas, checkboxFieldDatas }} />

        <div className="mt-[28px]">
          <Button
            type="submit"
            className={cn("w-full h-[48px] rounded-none leading-[normal]")}
          >
            로그인
          </Button>
        </div>
      </form>
    </Form>
  );
}
