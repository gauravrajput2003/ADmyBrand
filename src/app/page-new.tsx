'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              ADmyBRAND Insights
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive analytics dashboard for digital marketing insights, 
            performance tracking, and data-driven decision making.
          </p>
        </header>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">
              Track your performance with live data updates and interactive charts.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">User Insights</h3>
            <p className="text-muted-foreground">
              Understand your audience with detailed user behavior analytics.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Revenue Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your revenue streams and conversion rates in real-time.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="gap-2 px-8 py-3 text-lg hover:scale-105 transition-transform"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No signup required • View demo dashboard
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-lg border bg-card shadow-lg overflow-hidden">
              <div className="bg-muted/30 px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground font-mono">
                    admybrand-insights.com/dashboard
                  </span>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-muted/20 to-muted/5">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-background rounded p-3 shadow-sm">
                      <div className="h-2 bg-muted rounded mb-2"></div>
                      <div className="h-4 bg-primary/20 rounded mb-1"></div>
                      <div className="h-2 bg-muted rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-background rounded p-4 shadow-sm">
                    <div className="h-32 bg-gradient-to-r from-primary/10 to-primary/5 rounded"></div>
                  </div>
                  <div className="bg-background rounded p-4 shadow-sm">
                    <div className="h-32 bg-gradient-to-b from-secondary/10 to-secondary/5 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
