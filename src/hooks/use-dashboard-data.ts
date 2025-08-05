'use client';

import { useState, useEffect, useCallback } from 'react';
import { DashboardData } from '@/types/dashboard';
import { mockDashboardData } from '@/lib/mock-data';

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate slight data variations for real-time effect
      const variatedData = {
        ...mockDashboardData,
        metrics: mockDashboardData.metrics.map(metric => ({
          ...metric,
          value: metric.value + (Math.random() - 0.5) * 100,
          change: metric.change + (Math.random() - 0.5) * 5,
        }))
      };
      
      setData(variatedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    
    // Set up real-time updates every 30 seconds
    const interval = setInterval(() => {
      if (!isLoading) {
        fetchData();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchData, isLoading]);

  return { data, isLoading, error, refetch: fetchData };
}
