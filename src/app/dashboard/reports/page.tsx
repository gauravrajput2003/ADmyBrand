'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, Filter, BarChart3, TrendingUp, Users, DollarSign, Clock, Plus, Eye } from 'lucide-react';

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reportCategories = [
    { value: 'all', label: 'All Reports' },
    { value: 'performance', label: 'Performance' },
    { value: 'revenue', label: 'Revenue' },
    { value: 'users', label: 'Users' },
    { value: 'conversion', label: 'Conversion' },
  ];

  const reports = [
    {
      id: 1,
      title: 'Monthly Performance Report',
      description: 'Comprehensive overview of website performance metrics',
      category: 'performance',
      lastGenerated: '2 hours ago',
      size: '2.4 MB',
      type: 'PDF',
      status: 'ready',
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      id: 2,
      title: 'Revenue Analytics Report',
      description: 'Detailed breakdown of revenue streams and trends',
      category: 'revenue',
      lastGenerated: '1 day ago',
      size: '1.8 MB',
      type: 'PDF',
      status: 'ready',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      id: 3,
      title: 'User Behavior Analysis',
      description: 'Deep dive into user interactions and journey mapping',
      category: 'users',
      lastGenerated: '3 days ago',
      size: '3.1 MB',
      type: 'PDF',
      status: 'ready',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      id: 4,
      title: 'Conversion Funnel Report',
      description: 'Analysis of conversion rates across different touchpoints',
      category: 'conversion',
      lastGenerated: '5 days ago',
      size: '1.5 MB',
      type: 'PDF',
      status: 'ready',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950'
    },
    {
      id: 5,
      title: 'Weekly Summary Report',
      description: 'Quick overview of key metrics for the past week',
      category: 'performance',
      lastGenerated: 'Generating...',
      size: '—',
      type: 'PDF',
      status: 'generating',
      icon: Clock,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-950'
    },
  ];

  const quickStats = [
    { label: 'Total Reports', value: '24', change: '+3', icon: FileText },
    { label: 'Downloads This Month', value: '156', change: '+12', icon: Download },
    { label: 'Avg. Generation Time', value: '2.3min', change: '-0.5min', icon: Clock },
    { label: 'Storage Used', value: '47.2MB', change: '+5.1MB', icon: BarChart3 },
  ];

  const filteredReports = selectedCategory === 'all' 
    ? reports 
    : reports.filter(report => report.category === selectedCategory);

  return (
    <div className="flex-1 space-y-8 p-8 pt-6 animate-in fade-in-50 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text mb-2">
            Reports Center
          </h2>
          <p className="text-muted-foreground text-lg">
            Generate, schedule, and download comprehensive analytics reports
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 text-base px-6 py-3">
            <Calendar className="w-5 h-5" />
            Schedule Report
          </Button>
          <Button className="gap-2 text-base px-6 py-3">
            <Plus className="w-5 h-5" />
            Generate New
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 animate-in slide-in-from-bottom-4 duration-700 delay-100">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter by category:</span>
        </div>
        <div className="flex gap-2">
          {reportCategories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className="transition-all duration-200"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
        {filteredReports.map((report, index) => {
          const Icon = report.icon;
          return (
            <Card key={report.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`h-12 w-12 rounded-lg ${report.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`h-6 w-6 ${report.color}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      report.status === 'ready' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {report.status === 'ready' ? 'Ready' : 'Generating'}
                    </span>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {report.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {report.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Generated:</span>
                    <span className="font-medium">{report.lastGenerated}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">File Size:</span>
                    <span className="font-medium">{report.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="font-medium">{report.type}</span>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 gap-2"
                      disabled={report.status !== 'ready'}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Scheduled Reports */}
      <Card className="shadow-lg border-0 animate-in slide-in-from-bottom-4 duration-700 delay-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Scheduled Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Weekly Performance Summary', frequency: 'Every Monday at 9:00 AM', next: 'Tomorrow at 9:00 AM' },
              { name: 'Monthly Revenue Report', frequency: 'First Monday of each month', next: 'Dec 2, 2024 at 9:00 AM' },
              { name: 'Quarterly Analytics Review', frequency: 'Every 3 months', next: 'Jan 1, 2025 at 9:00 AM' },
            ].map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                <div>
                  <div className="font-medium">{schedule.name}</div>
                  <div className="text-sm text-muted-foreground">{schedule.frequency}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Next: {schedule.next}</div>
                  <Button variant="ghost" size="sm" className="text-xs h-auto p-1">
                    Edit Schedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
