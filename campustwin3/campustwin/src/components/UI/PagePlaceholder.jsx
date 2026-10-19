import Card from "./Card";

export default function PagePlaceholder({ title, description }) {
  return (
    <Card className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      </div>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-ink-secondary">
        {description || "This section is coming in a later build stage."}
      </p>
    </Card>
  );
}
