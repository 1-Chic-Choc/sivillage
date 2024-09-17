import SNSLoignButtons from "@/components/buttons/group/SNSLoignButtons";
import SignInForm from "@/components/forms/SignIn/SignInForm";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-screen">
      <div className={cn("pt-[28px] pb-[112px] px-[24px]")}>
        <SignInForm />

        <SNSLoignButtons />

        <div
          className={cn(
            "w-full h-[48px] border mt-[60px]",
            "flex justify-center items-center",
            "text-[14px] font-[500] leading-[normal]",
          )}
        >
          <Link href="sign-up">회원가입</Link>
        </div>

        <div
          className={cn(
            "w-full h-[20px] mt-[25px]",
            "flex justify-center items-center",
            "text-[14px] text-[#787878] font-[400] leading-[20PX] underline",
          )}
        >
          <Link href="/not-implemented">비회원 주문조회</Link>
        </div>
      </div>
    </div>
  );
}
