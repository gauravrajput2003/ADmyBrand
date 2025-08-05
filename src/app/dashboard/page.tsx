'use client';

import { OverviewCards } from '@/components/dashboard/overview-cards';
import { RevenueChart } from '@/components/dashboard/charts/revenue-chart';
import { UsersChart } from '@/components/dashboard/charts/users-chart';
import { ConversionChart } from '@/components/dashboard/charts/conversion-chart';
import { DataTable } from '@/components/dashboard/data-table';
import { LoadingSkeleton } from '@/components/shared/loading-skeleton';
import { useDashboardData } from '@/hooks/use-dashboard-data';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { data, isLoading, error } = useDashboardData();

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-2">Error loading dashboard data</div>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">No data available</div>
          <p className="text-muted-foreground">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
          <p className="text-muted-foreground mt-2">
            Welcome to ADmyBRAND Insights - Your marketing analytics hub
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Refresh Data
        </Button>
      </div>
      
      <div className="space-y-6">
        {/* Metrics Overview */}
        <div className="animate-in slide-in-from-bottom-4 duration-700 delay-100">
          <OverviewCards metrics={data.metrics} />
        </div>
        
        {/* Charts Section */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="col-span-4">
            <RevenueChart data={data.revenueData} />
          </div>
          <div className="col-span-3">
            <UsersChart data={data.userData} />
          </div>
        </div>
        
        {/* Second Row Charts + Table */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7 animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="col-span-4">
            <ConversionChart data={data.conversionData} />
          </div>
          <div className="col-span-3">
            <div className="space-y-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Revenue</span>
                    <span className="font-semibold">$45,231.89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Users</span>
                    <span className="font-semibold">2,350</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                    <span className="font-semibold">12.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Sales</span>
                    <span className="font-semibold">573</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Table */}
        <div className="animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
