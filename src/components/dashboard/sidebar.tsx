'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, BarChart3, FileText, Settings, TrendingUp } from 'lucide-react';

const sidebarNavItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="space-y-4 py-6">
        <div className="px-6 py-2">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold tracking-tight">
              Dashboard
            </h2>
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
                    'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-accent group',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <Icon className={cn(
                    'h-4 w-4 transition-colors',
                    isActive 
                      ? 'text-primary-foreground' 
                      : 'text-muted-foreground group-hover:text-foreground'
                  )} />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Additional sidebar content */}
        <div className="px-6">
          <div className="rounded-lg bg-muted/50 p-4">
            <h3 className="text-sm font-medium mb-2">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                Export Data
              </button>
              <button className="w-full text-left text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                Schedule Report
              </button>
              <button className="w-full text-left text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
