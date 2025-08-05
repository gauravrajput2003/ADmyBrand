import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ChartContainer({ title, children, className }: ChartContainerProps) {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-6 pt-0">
        {children}
      </div>
    </div>
  );
}
