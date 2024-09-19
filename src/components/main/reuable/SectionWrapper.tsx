import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section className="mb-[48px]">
      <h2
        className={cn(
          "text-[22px] text-[131922] font-[900] leading-[40px]",
          "font-regular-bold-cello",
          "px-[24px] mb-[8px]",
        )}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
