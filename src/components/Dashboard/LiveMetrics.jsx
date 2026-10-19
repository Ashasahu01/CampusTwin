import Card from "../UI/Card";
import ProgressBar from "../UI/ProgressBar";
import { LIVE_METRICS } from "../../data/dashboard";

export default function LiveMetrics() {
  return (
    <Card>
      <h3 className="text-base font-semibold text-ink">Live Metrics</h3>
      <div className="mt-5 space-y-4">
        {LIVE_METRICS.map((m) => (
          <div key={m.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-ink-secondary">{m.label}</span>
              <span className="font-semibold text-ink">{m.value}%</span>
            </div>
            <ProgressBar value={m.value} tone={m.tone} />
          </div>
        ))}
      </div>
    </Card>
  );
}
