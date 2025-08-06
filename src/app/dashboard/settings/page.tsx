'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Database, 
  Mail, 
  Lock, 
  Globe, 
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    weekly: true,
    monthly: false,
  });

  const settingsTabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'data', label: 'Data & Privacy', icon: Database },
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Globe className="h-6 w-6" />
            Business Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-base font-medium">Company Name</label>
              <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">ADmyBRAND Insights</div>
            </div>
            <div>
              <label className="text-base font-medium">Industry</label>
              <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">Digital Marketing</div>
            </div>
          </div>
          <div>
            <label className="text-base font-medium">Business Website</label>
            <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">https://admybrand.com</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-base font-medium">Time Zone</label>
              <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">UTC-5 (Eastern Time)</div>
            </div>
            <div>
              <label className="text-base font-medium">Currency</label>
              <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">USD ($)</div>
            </div>
          </div>
          <Button className="text-base px-6 py-3">Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Database className="h-6 w-6" />
            Data Collection Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-lg">Analytics Tracking</div>
              <div className="text-muted-foreground text-base">Collect user behavior data</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-7 bg-primary rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-lg">Performance Monitoring</div>
              <div className="text-muted-foreground text-base">Monitor site performance metrics</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-7 bg-primary rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-lg">Error Reporting</div>
              <div className="text-muted-foreground text-base">Automatically report errors and issues</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-7 bg-muted rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-1 left-1 transition-all"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              JD
            </div>
            <div>
              <Button variant="outline" size="lg" className="text-base">Change Avatar</Button>
              <p className="text-muted-foreground mt-2 text-base">JPG, PNG or GIF (max. 2MB)</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-base font-medium">First Name</label>
              <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">John</div>
            </div>
            <div>
              <label className="text-base font-medium">Last Name</label>
              <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">Doe</div>
            </div>
          </div>
          <div>
            <label className="text-base font-medium">Email Address</label>
            <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">john.doe@admybrand.com</div>
          </div>
          <div>
            <label className="text-base font-medium">Job Title</label>
            <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">Marketing Director</div>
          </div>
          <div>
            <label className="text-base font-medium">Phone Number</label>
            <div className="mt-1 p-4 border rounded-md bg-muted/30 text-base">+1 (555) 123-4567</div>
          </div>
          <Button className="text-base px-6 py-3">Update Profile</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Bell className="h-6 w-6" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h4 className="font-medium mb-6 text-lg">Communication Channels</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="font-medium text-lg">Email Notifications</div>
                    <div className="text-muted-foreground text-base">Receive updates via email</div>
                  </div>
                </div>
                <div className="w-12 h-7 bg-primary rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Smartphone className="h-5 w-5" />
                  <div>
                    <div className="font-medium text-lg">Push Notifications</div>
                    <div className="text-muted-foreground text-base">Browser and mobile push notifications</div>
                  </div>
                </div>
                <div className="w-12 h-7 bg-muted rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 left-1 transition-all"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Smartphone className="h-5 w-5" />
                  <div>
                    <div className="font-medium text-lg">SMS Notifications</div>
                    <div className="text-muted-foreground text-base">Text message alerts for critical updates</div>
                  </div>
                </div>
                <div className="w-12 h-7 bg-primary rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-lg">Report Frequency</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-lg">Weekly Summary</div>
                  <div className="text-muted-foreground text-base">Receive weekly performance summaries</div>
                </div>
                <div className="w-12 h-7 bg-primary rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-lg">Monthly Reports</div>
                  <div className="text-muted-foreground text-base">Comprehensive monthly analytics reports</div>
                </div>
                <div className="w-12 h-7 bg-muted rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 left-1 transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Lock className="h-6 w-6" />
            Password & Authentication
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-6 border rounded-lg">
            <div>
              <div className="font-medium text-lg">Password</div>
              <div className="text-muted-foreground text-base">Last changed 3 months ago</div>
            </div>
            <Button variant="outline" className="text-base px-6 py-3">Change Password</Button>
          </div>
          <div className="flex items-center justify-between p-6 border rounded-lg">
            <div>
              <div className="font-medium text-lg">Two-Factor Authentication</div>
              <div className="text-muted-foreground text-base">Add an extra layer of security</div>
            </div>
            <Button className="text-base px-6 py-3">Enable 2FA</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Shield className="h-6 w-6" />
            Security Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { action: 'Successful login', location: 'New York, NY', time: '2 hours ago', status: 'success' },
              { action: 'Password changed', location: 'New York, NY', time: '3 months ago', status: 'success' },
              { action: 'Failed login attempt', location: 'Unknown location', time: '1 week ago', status: 'warning' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <div className="font-medium text-lg">{activity.action}</div>
                    <div className="text-muted-foreground text-base">{activity.location}</div>
                  </div>
                </div>
                <div className="text-muted-foreground text-base">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Palette className="h-6 w-6" />
            Theme & Display
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h4 className="font-medium mb-6 text-lg">Theme Preference</h4>
            <div className="grid grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 cursor-pointer hover:border-primary transition-colors border-primary">
                <div className="flex items-center justify-center h-16 w-full bg-white border rounded mb-3">
                  <Sun className="h-8 w-8" />
                </div>
                <div className="text-center text-base font-medium">Light</div>
              </div>
              <div className="border rounded-lg p-6 cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center justify-center h-16 w-full bg-gray-900 border rounded mb-3">
                  <Moon className="h-8 w-8 text-white" />
                </div>
                <div className="text-center text-base font-medium">Dark</div>
              </div>
              <div className="border rounded-lg p-6 cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center justify-center h-16 w-full bg-gradient-to-r from-white to-gray-900 border rounded mb-3">
                  <Monitor className="h-8 w-8" />
                </div>
                <div className="text-center text-base font-medium">System</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-lg">Display Options</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-lg">Compact Mode</div>
                  <div className="text-muted-foreground text-base">Reduce spacing and padding</div>
                </div>
                <div className="w-12 h-7 bg-muted rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 left-1 transition-all"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-lg">High Contrast</div>
                  <div className="text-muted-foreground text-base">Improve accessibility</div>
                </div>
                <div className="w-12 h-7 bg-muted rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 left-1 transition-all"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-lg">Animations</div>
                  <div className="text-muted-foreground text-base">Enable UI animations and transitions</div>
                </div>
                <div className="w-12 h-7 bg-primary rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDataSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Database className="h-6 w-6" />
            Data Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-6 border rounded-lg">
            <div>
              <div className="font-medium text-lg">Export Data</div>
              <div className="text-muted-foreground text-base">Download all your analytics data</div>
            </div>
            <Button variant="outline" className="text-base px-6 py-3">Export</Button>
          </div>
          <div className="flex items-center justify-between p-6 border rounded-lg">
            <div>
              <div className="font-medium text-lg">Data Retention</div>
              <div className="text-muted-foreground text-base">Currently keeping data for 24 months</div>
            </div>
            <Button variant="outline" className="text-base px-6 py-3">Configure</Button>
          </div>
          <div className="flex items-center justify-between p-6 border rounded-lg border-red-200">
            <div>
              <div className="font-medium text-lg text-red-600">Delete Account</div>
              <div className="text-muted-foreground text-base">Permanently delete your account and all data</div>
            </div>
            <Button variant="destructive" className="text-base px-6 py-3">Delete</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-lg">Data Sharing</div>
              <div className="text-muted-foreground text-base">Share anonymized data for product improvement</div>
            </div>
            <div className="w-12 h-7 bg-muted rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-1 left-1 transition-all"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-lg">Marketing Communications</div>
              <div className="text-muted-foreground text-base">Receive product updates and offers</div>
            </div>
            <div className="w-12 h-7 bg-primary rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 transition-all"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings();
      case 'profile':
        return renderProfileSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'security':
        return renderSecuritySettings();
      case 'appearance':
        return renderAppearanceSettings();
      case 'data':
        return renderDataSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 animate-in fade-in-50 duration-500">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          Settings
        </h2>
        <p className="text-muted-foreground mt-2 text-lg">
          Manage your account preferences and application settings
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Navigation */}
        <div className="w-full lg:w-64">
          <Card className="shadow-lg border-0">
            <CardContent className="p-2">
              <nav className="space-y-1">
                {settingsTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-md transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium text-base">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="flex-1 animate-in slide-in-from-right-4 duration-500">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
