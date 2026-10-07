export function StepList({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-3xl border border-line bg-elevated p-5">
          <p className="text-sm text-gold">0{index + 1}</p>
          <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
