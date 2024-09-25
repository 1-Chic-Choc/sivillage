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
import { SignUpResquestType } from "@/types/RequestTypes";
import { signUpAction } from "@/action/authAction";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignUpForm() {
  const params = useSearchParams();
  const router = useRouter();
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
    const { email, password, name, phone, birth, address } = values;

    const terms = [
      { termsId: 1, isAgree: true },
      { termsId: 2, isAgree: true },
      { termsId: 3, isAgree: true },
      { termsId: 4, isAgree: true },
      { termsId: 5, isAgree: true },
      { termsId: 6, isAgree: true },
    ];

    const oauthProvider = params.get("oauthProvider") || undefined;
    const oauthId = params.get("oauthId") || undefined;
    const oauthEmail = params.get("oauthEmail") || undefined;

    const signUpData: SignUpResquestType = {
      email,
      password,
      name,
      phone,
      postalCode: address.zonecode,
      address: address.fullAddress,
      birth,
      terms,
      oauthProvider,
      oauthId,
      oauthEmail,
    };

    signUpAction(signUpData).then((res) => {
      if (res) {
        alert("회원가입이 완료되었습니다.");

        signIn("credentials", {
          email,
          password,
          autoSignIn: false,
          redirect: true,
        });

        router.push("/");
      } else {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    });
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
