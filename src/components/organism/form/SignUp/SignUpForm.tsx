"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Separator } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import EssentialFieldSection from "./EssentialFieldSection";
import OptionalFieldSection from "./OptionalFieldSection";
import AgreementFieldSection from "./AgreementFieldSection";
import { signUpSchema } from "@/schema/form-schema";

export default function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    mode: "all",
    defaultValues: {
      over14: [],
      marketingAgreement: [],
      marketingAgreementDetails: [],
      signUpAgreements: [],
      address: {
        zonecode: "",
        fullAddress: "",
      },
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <EssentialFieldSection form={form} />
        <Separator className="h-[8px] bg-[#F0F0F0] mx-[-24px]" />
        <OptionalFieldSection form={form} />
        <Separator className="h-[8px] bg-[#F0F0F0] mx-[-24px]" />
        <AgreementFieldSection form={form} />
        <Button type="submit" className={cn("w-full h-[48px] rounded-none")}>
          약관동의 및 가입완료
        </Button>
      </form>
    </Form>
  );
}
