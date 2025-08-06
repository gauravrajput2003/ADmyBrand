'use client';

import { useState, useEffect } from 'react';
import { OverviewCards } from '@/components/dashboard/overview-cards';
import { RevenueChart } from '@/components/dashboard/charts/revenue-chart';
import { UsersChart } from '@/components/dashboard/charts/users-chart';
import { ConversionChart } from '@/components/dashboard/charts/conversion-chart';
import { DataTable } from '@/components/dashboard/data-table';
import { DataFilters } from '@/components/shared/data-filters';
import { DashboardSkeleton } from '@/components/shared/loading-skeleton';
import { exportToCSV, exportToPDF } from '@/lib/export-utils';
import { useDashboardData } from '@/hooks/use-dashboard-data';
import { RefreshCw, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { data, isLoading, error } = useDashboardData();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filteredData, setFilteredData] = useState(data?.tableData || []);

  useEffect(() => {
    if (data?.tableData) {
      setFilteredData(data.tableData);
    }
  }, [data]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    window.location.reload();
  };

  const handleExportCSV = () => {
    if (filteredData.length > 0) {
      const filename = `admybrand-dashboard-${new Date().toISOString().split('T')[0]}.csv`;
      exportToCSV(filteredData, filename);
    }
  };

  const handleExportPDF = () => {
    exportToPDF('dashboard-content', `admybrand-dashboard-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const handleFilterChange = (filters: {
    startDate: Date | null;
    endDate: Date | null;
    searchTerm: string;
    status: string;
    category: string;
  }) => {
    if (!data?.tableData) return;
    
    let filtered = [...data.tableData];
    
    // Apply search filter
    if (filters.searchTerm) {
      filtered = filtered.filter(item => 
        Object.values(item).some(value => 
          String(value).toLowerCase().includes(filters.searchTerm.toLowerCase())
        )
      );
    }
    
    // Apply date range filter
    if (filters.startDate && filters.endDate) {
      filtered = filtered.filter(item => {
        const dateValue = item.date || item.created_at;
        const itemDate = new Date(typeof dateValue === 'string' || typeof dateValue === 'number' || dateValue instanceof Date ? dateValue : Date.now());
        return itemDate >= filters.startDate! && itemDate <= filters.endDate!;
      });
    }
    
    // Apply status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(item => item.status === filters.status);
    }
    
    setFilteredData(filtered);
  };

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="text-red-500 text-xl font-semibold mb-3">Error loading dashboard data</div>
          <p className="text-muted-foreground mb-6 text-lg">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline" className="text-base px-6 py-3">
            <RefreshCw className="w-5 h-5 mr-2" />
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
          <div className="text-xl font-semibold mb-3 text-foreground">No data available</div>
          <p className="text-muted-foreground text-lg">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-2">Dashboard</h2>
                      <p className="text-muted-foreground mt-2 text-lg">
              Welcome back! Here&apos;s what&apos;s happening with your business today.
            </p>
        </div>
        <Button variant="outline" className="gap-2 text-base px-6 py-3">
          <RefreshCw className="w-5 h-5" />
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
