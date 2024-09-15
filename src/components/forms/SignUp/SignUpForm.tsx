"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchema } from "@/components/forms/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import EssentialField from "./EssentialField";
import OptionalField from "./OptionalField";
import AgreementField from "./AgreementField";
import { Separator } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
        <EssentialField className={cn("pt-[22px] pb-[40px]")} form={form} />
        <Separator className="h-[8px] bg-[#F0F0F0] mx-[-24px]" />
        <OptionalField className={cn("pt-[37px] pb-[40px]")} form={form} />
        <Separator className="h-[8px] bg-[#F0F0F0] mx-[-24px]" />
        <AgreementField className={cn("pt-[37px] pb-[40px]")} form={form} />
        <Button type="submit" className={cn("w-full h-[48px] rounded-none")}>
          약관동의 및 가입완료
        </Button>
      </form>
    </Form>
  );
}
