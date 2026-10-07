import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="shell grid items-end gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{lede}</p>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-3xl">
        <Image src={image} alt={alt} fill priority sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
      </div>
    </section>
  );
}
