'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ChartContainer } from '@/components/shared/chart-container';
import { ConversionData } from '@/types/dashboard';
import { formatPercentage } from '@/lib/utils';

interface ConversionChartProps {
  data: ConversionData[];
}

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--secondary))',
  'hsl(var(--accent))',
  'hsl(var(--muted))',
  '#8884d8',
  '#82ca9d',
  '#ffc658'
];

export function ConversionChart({ data }: ConversionChartProps) {
  // Transform data for pie chart
  const pieData = data.map((item, index) => ({
    name: item.name,
    value: item.conversionRate,
    conversions: item.conversions,
    visitors: item.visitors,
    fill: COLORS[index % COLORS.length]
  }));

    const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{
      color: string;
      value: number;
      payload: {
        name: string;
        value: number;
        conversionRate: number;
        conversions: number;
        visitors: number;
      };
    }>;
    label?: string;
  }) => {
    if (active && payload && payload[0]) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            Conversion Rate: {formatPercentage(data.value)}
          </p>
          <p className="text-sm text-muted-foreground">
            Conversions: {data.conversions}
          </p>
          <p className="text-sm text-muted-foreground">
            Visitors: {data.visitors}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer title="Conversion Rate by Month" className="col-span-4">
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }: any) => `${name}: ${formatPercentage(value || 0)}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
}
