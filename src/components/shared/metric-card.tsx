'use client';

import { DashboardMetric } from '@/types/dashboard';
import { formatCurrency, formatNumber, formatPercentage, getChangeColor } from '@/lib/utils';
import { TrendingUp, TrendingDown, DollarSign, Users, CreditCard, Activity } from 'lucide-react';

interface MetricCardProps {
  metric: DashboardMetric;
}

const iconMap = {
  DollarSign,
  Users,
  CreditCard,
  Activity,
};

export function MetricCard({ metric }: MetricCardProps) {
  const formattedValue = 
    metric.title.toLowerCase().includes('revenue') ? formatCurrency(metric.value) :
    metric.title.toLowerCase().includes('rate') ? formatPercentage(metric.value) :
    formatNumber(metric.value);

  const changeText = metric.change > 0 ? `+${metric.change}%` : `${metric.change}%`;
  const IconComponent = iconMap[metric.icon as keyof typeof iconMap] || Activity;
  const TrendIcon = metric.changeType === 'increase' ? TrendingUp : TrendingDown;

  return (
    <div className="relative group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 p-6">
      <div className="flex flex-row items-center justify-between space-y-0 pb-3">
        <p className="text-base font-medium text-muted-foreground">{metric.title}</p>
        <div className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors">
          <IconComponent className="h-5 w-5" />
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold tracking-tight text-foreground mb-2">{formattedValue}</div>
        <div className="flex items-center gap-2 mt-2">
          <TrendIcon className={`h-4 w-4 ${getChangeColor(metric.changeType)}`} />
          <p className={`text-sm font-medium ${getChangeColor(metric.changeType)}`}>
            {changeText} from last month
          </p>
        </div>
      </div>
      
      {/* Subtle animation on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
    </div>
  );
}
