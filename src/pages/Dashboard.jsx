import MetricCard from "../components/Dashboard/MetricCard";
import CampusOverview from "../components/Dashboard/CampusOverview";
import LiveMetrics from "../components/Dashboard/LiveMetrics";
import Card from "../components/UI/Card";
import { METRICS } from "../data/dashboard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Metric cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      {/* Campus overview + live metrics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CampusOverview />
        </div>
        <LiveMetrics />
      </div>

      {/* Placeholder for charts + alerts, built in the next stage */}
      <Card className="border-dashed">
        <p className="text-sm text-ink-secondary">
          Occupancy &amp; energy charts and the live alerts feed will be added
          in the next build stage.
        </p>
      </Card>
    </div>
  );
}
