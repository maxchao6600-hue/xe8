import Image from "next/image";

export function BrandLogo({ className = "h-9 w-auto md:h-10" }: { className?: string }) {
  return (
    <Image
      src="/assets/brand/xe8-logo-on-dark.svg"
      alt="XE8"
      width={265}
      height={146}
      unoptimized
      priority
      className={className}
    />
  );
}
