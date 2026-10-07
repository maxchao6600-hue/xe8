export default function Loading() {
  return (
    <div className="shell py-16" aria-hidden="true">
      <div className="h-8 w-40 rounded-full bg-elevated" />
      <div className="mt-6 h-12 w-2/3 max-w-xl rounded-2xl bg-elevated" />
      <div className="mt-8 aspect-video rounded-3xl bg-elevated" />
    </div>
  );
}
