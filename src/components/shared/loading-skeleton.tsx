'use client';

export function LoadingSkeleton() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6 animate-in fade-in-50 duration-500">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 bg-muted rounded-lg w-48 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-72 animate-pulse"></div>
        </div>
        <div className="h-9 bg-muted rounded-md w-28 animate-pulse"></div>
      </div>
      
      {/* Metrics Cards Skeleton */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-lg border bg-card p-6">
            <div className="animate-pulse space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-4 bg-muted rounded w-20"></div>
                <div className="h-4 w-4 bg-muted rounded"></div>
              </div>
              <div className="h-8 bg-muted rounded w-24"></div>
              <div className="h-3 bg-muted rounded w-32"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Charts Skeleton */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-lg border bg-card p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-muted rounded w-32"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
        <div className="col-span-3 rounded-lg border bg-card p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-muted rounded w-24"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Second Row Charts */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-lg border bg-card p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-muted rounded w-36"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
        <div className="col-span-3 rounded-lg border bg-card p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-muted rounded w-28"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-4 bg-muted rounded w-20"></div>
                  <div className="h-4 bg-muted rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Table Skeleton */}
      <div className="rounded-lg border bg-card">
        <div className="p-6 border-b">
          <div className="animate-pulse space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-6 bg-muted rounded w-40"></div>
              <div className="h-8 bg-muted rounded w-20"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-9 bg-muted rounded flex-1"></div>
              <div className="h-9 bg-muted rounded w-28"></div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded"></div>
              ))}
            </div>
            
            {/* Table Rows */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="h-4 bg-muted/70 rounded"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
