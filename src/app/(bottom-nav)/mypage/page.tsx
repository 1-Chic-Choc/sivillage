import SignOutButton from "@/components/molecule/button/SignOutButton";
import BandShapeBanner from "@/components/template/page/main/reuable/BandShapeBanner";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <main>
      <div
        className={cn(
          "w-full px-[24px] my-[64px]",
          "flex  flex-col justify-around items-center",
        )}
      >
        <SignOutButton className="w-full rounded-none" />
      </div>
      <BandShapeBanner />
    </main>
  );
}
