'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-muted/50 via-muted to-muted/50 bg-[length:200%_100%]",
        className
      )}
      {...props}
    />
  );
}

// Card Skeleton for dashboard cards
export function CardSkeleton() {
  return (
    <div className="p-6 border rounded-xl bg-card shadow-sm">
      <div className="flex items-center justify-between space-x-4">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-16" />
        </div>
        <Skeleton className="h-12 w-12 rounded-lg" />
      </div>
      <div className="mt-4">
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}

// Table Skeleton
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="border rounded-lg bg-card">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <div className="flex gap-2">
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Chart Skeleton
export function ChartSkeleton({ height = "h-80" }: { height?: string }) {
  return (
    <div className="border rounded-lg bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-8 w-20" />
      </div>
      <div className={cn("relative", height)}>
        <div className="absolute inset-0 flex items-end justify-between space-x-2 px-4 pb-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full"
              style={{
                height: `${Math.random() * 60 + 20}%`,
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 flex items-center justify-between px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-8" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Dashboard Overview Skeleton
export function DashboardSkeleton() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-5 w-96" />
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>

      {/* Charts Section Skeleton */}
      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4">
          <ChartSkeleton />
        </div>
        <div className="md:col-span-3">
          <ChartSkeleton height="h-80" />
        </div>
      </div>

      {/* Table Skeleton */}
      <TableSkeleton rows={8} />
    </div>
  );
}

// Loading state for original component compatibility
export function LoadingSkeleton() {
  return <DashboardSkeleton />;
}
