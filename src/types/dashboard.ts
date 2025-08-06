export interface DashboardMetric {
  id: string;
  title: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
}

export interface RevenueData extends ChartData {
  revenue: number;
  month: string;
}

export interface UserData extends ChartData {
  users: number;
  newUsers: number;
  returningUsers: number;
}

export interface ConversionData extends ChartData {
  conversionRate: number;
  conversions: number;
  visitors: number;
}

export interface DashboardData {
  metrics: DashboardMetric[];
  revenueData: RevenueData[];
  userData: UserData[];
  conversionData: ConversionData[];
  tableData: TableRow[];
}

export interface TableRow {
  id: string;
  [key: string]: string | number | boolean | Date;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}
