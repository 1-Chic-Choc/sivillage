"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CheckboxFormField, {
  CheckboxFormFieldProps,
} from "@/components/organism/form/CheckboxFormField";
import InputFormField, {
  InputFormFieldProps,
} from "@/components/organism/form/InputFormField";
import Link from "next/link";
import { signInSchema } from "@/schema/form-schema";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

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
  const params = useSearchParams();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      autoSignIn: [],
    },
  });
  function onSubmit(values: z.infer<typeof signInSchema>) {
    const { email, password } = values;
    const autoSignIn = values.autoSignIn.includes("autoSignIn");
    const oauthProvider = params.get("oauthProvider") || undefined;
    const oauthId = params.get("oauthId") || undefined;
    const oauthEmail = params.get("oauthEmail") || undefined;

    signIn("credentials", {
      email,
      password,
      autoSignIn,
      oauthProvider,
      oauthId,
      oauthEmail,
      redirect: true,
    });
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
