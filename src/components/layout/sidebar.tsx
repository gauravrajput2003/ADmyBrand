'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, BarChart3, FileText, Settings, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const sidebarNavItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: Home,
    description: 'Main dashboard overview'
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
    description: 'Advanced analytics & insights'
  },
  {
    title: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
    description: 'Generated reports & exports'
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    description: 'Dashboard configuration'
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r bg-gradient-to-b from-background to-muted/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="space-y-4 py-6">
        <div className="px-6 py-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dashboard
              </h2>
              <p className="text-xs text-muted-foreground">ADmyBRAND Insights</p>
            </div>
          </div>
          
          <div className="space-y-2">
            {sidebarNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-accent/50 group relative overflow-hidden',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <Icon className={cn(
                    'h-6 w-6 transition-all duration-200',
                    isActive 
                      ? 'text-primary-foreground scale-110' 
                      : 'text-muted-foreground group-hover:text-foreground group-hover:scale-110'
                  )} />
                  <div className="flex-1">
                    <div className="font-medium text-base">{item.title}</div>
                    <div className={cn(
                      "text-sm transition-colors",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground/60"
                    )}>
                      {item.description}
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary-foreground rounded-l-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Quick Stats Card */}
        <div className="mx-6">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-4 border">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Total Users</span>
                <span className="font-bold text-base">2,350</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Revenue</span>
                <span className="font-bold text-base text-green-600">$45.2K</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Conversion</span>
                <span className="font-bold text-base text-blue-600">12.5%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mx-6">
          <div className="rounded-xl bg-muted/30 p-4">
            <h3 className="text-base font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-accent/50 font-medium">
                📊 Export Analytics
              </button>
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-accent/50 font-medium">
                📧 Schedule Report
              </button>
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-accent/50 font-medium">
                📖 Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
