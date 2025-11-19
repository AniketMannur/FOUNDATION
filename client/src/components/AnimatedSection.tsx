import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  background?: "white" | "gray" | "transparent";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
  background = "white",
}: AnimatedSectionProps) {
  const bgClass = {
    white: "bg-white",
    gray: "bg-gray-50",
    transparent: "bg-transparent",
  }[background];

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        bgClass,
        "opacity-0 animate-fade-in-up",
        delayClass,
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
