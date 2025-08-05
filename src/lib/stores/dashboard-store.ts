'use client';

import { create } from 'zustand';
import { DashboardData } from '@/types/dashboard';

interface DashboardStore {
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
  setData: (data: DashboardData) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  setData: (data) => set({ data }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
