"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInSchema } from "@/components/forms/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CheckboxFormField, {
  CheckboxFormFieldProps,
} from "@/components/forms/CheckboxFormField";
import InputFormField, {
  InputFormFieldProps,
} from "@/components/forms/InputFormField";
import Link from "next/link";

const inputFormFields: Omit<InputFormFieldProps, "form">[] = [
  {
    name: "email",
    className: "space-y-0",
    input: {
      placeholder: "아이디 (이메일주소)",
    },
  },
  {
    name: "password",
    input: {
      placeholder: "비밀번호",
      props: { type: "password" },
    },
  },
];

const autoLogin: Omit<CheckboxFormFieldProps, "form"> = {
  name: "autoLogin",
  items: [
    {
      id: "autoLogin",
      className: "space-y-0 flex items-center",
      label: {
        children: "자동로그인",
        className: "text-[14px] font-[500] leading-[20px] ",
      },
    },
  ],
};

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
        {inputFormFields.map((props) => (
          <InputFormField key={props.name} {...props} form={form} />
        ))}

        <div className="mt-[16px] flex justify-between items-center">
          <CheckboxFormField {...autoLogin} form={form} />
          <Link
            href="/find-ID-PW"
            className="text-[14px] text-[#787878] font-[400] leading-[20px] underline"
          >
            ID/PW 찾기
          </Link>
        </div>

        <div className="mt-[28px]">
          <Button
            type="submit"
            className={cn(
              "w-full h-[48px] rounded-none",
              "text-[14px] font-[500] leading-[normal]",
            )}
          >
            로그인
          </Button>
        </div>
      </form>
    </Form>
  );
}
