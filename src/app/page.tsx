'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <>
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
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Glow effect behind button */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-lg opacity-75 animate-pulse"></div>
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="relative gap-2 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
              >
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                ✨ No signup required
              </span>
              <span className="mx-2">•</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 font-medium">
                🚀 View demo dashboard
              </span>
            </p>
          </div>

          {/* Features Grid - Alternative to Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-lg border bg-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Interactive Charts</h4>
              <p className="text-sm text-muted-foreground">Beautiful, responsive charts powered by Recharts</p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Export Data</h4>
              <p className="text-sm text-muted-foreground">Export your data in CSV and PDF formats</p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Advanced Filters</h4>
              <p className="text-sm text-muted-foreground">Filter data by date ranges and categories</p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Professional UI</h4>
              <p className="text-sm text-muted-foreground">Modern design with dark/light theme support</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
