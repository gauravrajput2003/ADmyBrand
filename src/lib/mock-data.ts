import { DashboardData, DashboardMetric, RevenueData, UserData, ConversionData } from '@/types/dashboard';

export const mockMetrics: DashboardMetric[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: 45231.89,
    change: 20.1,
    changeType: 'increase',
    icon: 'DollarSign',
  },
  {
    id: '2',
    title: 'Active Users',
    value: 2350,
    change: 180.1,
    changeType: 'increase',
    icon: 'Users',
  },
  {
    id: '3',
    title: 'Conversion Rate',
    value: 12.5,
    change: 19,
    changeType: 'increase',
    icon: 'CreditCard',
  },
  {
    id: '4',
    title: 'Sales',
    value: 573,
    change: 201,
    changeType: 'increase',
    icon: 'Activity',
  },
];

export const mockRevenueData: RevenueData[] = [
  { name: 'Jan', value: 4000, revenue: 4000, month: 'Jan' },
  { name: 'Feb', value: 3000, revenue: 3000, month: 'Feb' },
  { name: 'Mar', value: 5000, revenue: 5000, month: 'Mar' },
  { name: 'Apr', value: 4500, revenue: 4500, month: 'Apr' },
  { name: 'May', value: 6000, revenue: 6000, month: 'May' },
  { name: 'Jun', value: 5500, revenue: 5500, month: 'Jun' },
  { name: 'Jul', value: 7000, revenue: 7000, month: 'Jul' },
];

export const mockUserData: UserData[] = [
  { name: 'Jan', value: 1400, users: 1400, newUsers: 800, returningUsers: 600 },
  { name: 'Feb', value: 1200, users: 1200, newUsers: 700, returningUsers: 500 },
  { name: 'Mar', value: 1800, users: 1800, newUsers: 1000, returningUsers: 800 },
  { name: 'Apr', value: 1600, users: 1600, newUsers: 900, returningUsers: 700 },
  { name: 'May', value: 2200, users: 2200, newUsers: 1200, returningUsers: 1000 },
  { name: 'Jun', value: 2000, users: 2000, newUsers: 1100, returningUsers: 900 },
  { name: 'Jul', value: 2400, users: 2400, newUsers: 1300, returningUsers: 1100 },
];

export const mockConversionData: ConversionData[] = [
  { name: 'Jan', value: 12.5, conversionRate: 12.5, conversions: 125, visitors: 1000 },
  { name: 'Feb', value: 11.8, conversionRate: 11.8, conversions: 118, visitors: 1000 },
  { name: 'Mar', value: 13.2, conversionRate: 13.2, conversions: 132, visitors: 1000 },
  { name: 'Apr', value: 12.9, conversionRate: 12.9, conversions: 129, visitors: 1000 },
  { name: 'May', value: 14.1, conversionRate: 14.1, conversions: 141, visitors: 1000 },
  { name: 'Jun', value: 13.7, conversionRate: 13.7, conversions: 137, visitors: 1000 },
  { name: 'Jul', value: 15.2, conversionRate: 15.2, conversions: 152, visitors: 1000 },
];

export const mockDashboardData: DashboardData = {
  metrics: mockMetrics,
  revenueData: mockRevenueData,
  userData: mockUserData,
  conversionData: mockConversionData,
};
