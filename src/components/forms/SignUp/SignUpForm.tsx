"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchema } from "@/components/forms/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import EssentialField from "./EssentialField";
import OptionalField from "./OptionalField";
import AgreementField from "./AgreementField";

export default function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    mode: "all",
    defaultValues: {
      shouldBeOver14: [],
      marketingAgreements: [],
      signUpAgreements: [],
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <EssentialField form={form} />
        <OptionalField form={form} />
        <AgreementField form={form} />
        <button type="submit">약관동의 및 가입완료</button>
      </form>
    </Form>
  );
}
