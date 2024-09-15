import SignInForm from "@/components/forms/SignIn/SignInForm";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <div className="w-full">
      <div className={cn("px-[24px] pb-[80px]")}>
        <SignInForm />
      </div>
    </div>
  );
}
