import SignUpForm from "@/components/organism/form/SignUp/SignUpForm";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <main className="w-full">
      <div className={cn("px-[24px] pb-[80px]")}>
        <SignUpForm />
      </div>
    </main>
  );
}
