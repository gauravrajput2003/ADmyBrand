import { DashboardMetric } from '@/types/dashboard';
import { MetricCard } from '@/components/shared/metric-card';

interface OverviewCardsProps {
  metrics: DashboardMetric[];
}

export function OverviewCards({ metrics }: OverviewCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
}
