'use client';

import { BarChart3, Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                ADmyBRAND Insights
              </h3>
            </div>
            <p className="text-muted-foreground text-base mb-4 max-w-md">
              Comprehensive analytics dashboard for digital marketing professionals. 
              Track performance, analyze data, and make informed decisions with real-time insights.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@admybrand.com"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Real-time Analytics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Revenue Tracking</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">User Insights</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Data Export</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Custom Reports</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-base">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-base">
              <span>&copy; 2025 ADmyBRAND Insights. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-base">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for internship project</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
