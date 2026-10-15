import Image from "next/image";

export function LogoMarquee({
  items,
  label,
}: {
  items: { name: string; logo: string }[];
  label: string;
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label={label}>
      {items.map((item) => (
        <li key={item.name} className="flex h-20 items-center justify-center rounded-2xl bg-[#f6f3ee] px-4">
          <Image
            src={item.logo}
            alt={item.name}
            width={300}
            height={64}
            className="h-10 w-auto max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
