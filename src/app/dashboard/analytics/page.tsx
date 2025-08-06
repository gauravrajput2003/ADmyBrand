'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, Eye, Clock, Target, Filter, Calendar, Download } from 'lucide-react';

export default function AnalyticsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('pageviews');

  const timeRanges = [
    { value: '1d', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
  ];

  const analyticsData = [
    {
      title: 'Page Views',
      value: '127,543',
      change: '+12.3%',
      trend: 'up',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Unique Visitors',
      value: '24,891',
      change: '+8.7%',
      trend: 'up',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      title: 'Avg. Session Duration',
      value: '4m 32s',
      change: '+15.2%',
      trend: 'up',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      title: 'Conversion Rate',
      value: '3.42%',
      change: '+2.1%',
      trend: 'up',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950'
    },
  ];

  const topPages = [
    { path: '/dashboard', views: '12,543', percentage: 35 },
    { path: '/analytics', views: '8,921', percentage: 25 },
    { path: '/reports', views: '6,234', percentage: 17 },
    { path: '/settings', views: '4,567', percentage: 13 },
    { path: '/users', views: '3,201', percentage: 10 },
  ];

  const trafficSources = [
    { source: 'Direct', visitors: '15,234', percentage: 45, color: 'bg-blue-500' },
    { source: 'Search Engines', visitors: '10,567', percentage: 31, color: 'bg-green-500' },
    { source: 'Social Media', visitors: '5,234', percentage: 15, color: 'bg-purple-500' },
    { source: 'Email', visitors: '2,890', percentage: 9, color: 'bg-orange-500' },
  ];

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 animate-in fade-in-50 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text mb-2">
            Advanced Analytics
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep dive into your website performance and user behavior
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <select 
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-4 py-3 text-base border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          <Button variant="outline" className="gap-2 text-base px-6 py-3">
            <Download className="w-5 h-5" />
            Export
          </Button>
        </div>
      </div>

      {/* Analytics Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-in slide-in-from-bottom-4 duration-700 delay-100">
        {analyticsData.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0 pb-2">
                  <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                  <div className={`h-10 w-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <p className="text-xs font-medium text-green-600">
                      {metric.change} from last period
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-6 lg:grid-cols-3 animate-in slide-in-from-bottom-4 duration-700 delay-200">
        {/* Top Pages */}
        <Card className="lg:col-span-2 shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Top Performing Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={page.path} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{page.path}</div>
                    <div className="text-xs text-muted-foreground">{page.views} views</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${page.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-10 text-right">{page.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{source.source}</span>
                    <span className="text-muted-foreground">{source.percentage}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-700 ${source.color}`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground min-w-[60px]">{source.visitors}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Activity */}
      <Card className="shadow-lg border-0 animate-in slide-in-from-bottom-4 duration-700 delay-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            Real-time Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <div className="text-2xl font-bold text-blue-600 mb-1">47</div>
              <div className="text-sm text-blue-600/80">Active Users</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <div className="text-2xl font-bold text-green-600 mb-1">1.2K</div>
              <div className="text-sm text-green-600/80">Pages/Hour</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
              <div className="text-2xl font-bold text-purple-600 mb-1">3m 24s</div>
              <div className="text-sm text-purple-600/80">Avg. Session</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
