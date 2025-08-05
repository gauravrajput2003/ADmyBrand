'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer } from '@/components/shared/chart-container';
import { UserData } from '@/types/dashboard';
import { formatNumber } from '@/lib/utils';

interface UsersChartProps {
  data: UserData[];
}

export function UsersChart({ data }: UsersChartProps) {
  return (
    <ChartContainer title="User Growth" className="col-span-3">
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="name" 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              className="text-xs fill-muted-foreground"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
            />
            <Tooltip 
              formatter={(value: number, name: string) => [formatNumber(value), name === 'newUsers' ? 'New Users' : 'Returning Users']}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Legend />
            <Bar 
              dataKey="newUsers" 
              fill="hsl(var(--primary))" 
              name="New Users"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="returningUsers" 
              fill="hsl(var(--secondary))" 
              name="Returning Users"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
}
