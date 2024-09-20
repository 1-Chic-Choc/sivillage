interface FadeUpProps {
  className?: string;
  children: React.ReactNode;
}

export default function FadeUp({ className, children }: FadeUpProps) {
  return (
    <div data-aos="fade-up" className={className}>
      {children}{" "}
    </div>
  );
}
