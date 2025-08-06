'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Download, 
  FileText, 
  Calendar, 
  Filter, 
  Search,
  X,
  ChevronDown
} from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface DataFiltersProps {
  onExportCSV?: () => void;
  onExportPDF?: () => void;
  onFilterChange?: (filters: FilterState) => void;
  showExport?: boolean;
  showDateRange?: boolean;
  showSearch?: boolean;
  showStatusFilter?: boolean;
}

interface FilterState {
  startDate: Date | null;
  endDate: Date | null;
  searchTerm: string;
  status: string;
  category: string;
}

export function DataFilters({
  onExportCSV,
  onExportPDF,
  onFilterChange,
  showExport = true,
  showDateRange = true,
  showSearch = true,
  showStatusFilter = true
}: DataFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    startDate: null,
    endDate: null,
    searchTerm: '',
    status: 'all',
    category: 'all'
  });
  
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      startDate: null,
      endDate: null,
      searchTerm: '',
      status: 'all',
      category: 'all'
    };
    setFilters(clearedFilters);
    onFilterChange?.(clearedFilters);
  };

  const hasActiveFilters = filters.startDate || filters.endDate || 
    filters.searchTerm || filters.status !== 'all' || filters.category !== 'all';

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Data Filters & Export
          </div>
          {hasActiveFilters && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearFilters}
              className="text-sm"
            >
              <X className="h-4 w-4 mr-1" />
              Clear All
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search Filter */}
          {showSearch && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search data..."
                  value={filters.searchTerm}
                  onChange={(e) => handleFilterChange({ searchTerm: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background text-base focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Date Range Filter */}
          {showDateRange && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
                  className="w-full justify-between text-base"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {filters.startDate && filters.endDate 
                      ? `${filters.startDate.toLocaleDateString()} - ${filters.endDate.toLocaleDateString()}`
                      : 'Select date range'
                    }
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {isDateRangeOpen && (
                  <div className="absolute top-full left-0 z-50 mt-2 p-4 bg-background border rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium block mb-2">Start Date</label>
                        <DatePicker
                          selected={filters.startDate}
                          onChange={(date) => handleFilterChange({ startDate: date })}
                          selectsStart
                          startDate={filters.startDate}
                          endDate={filters.endDate}
                          className="w-full p-2 border rounded text-base"
                          placeholderText="Start date"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-2">End Date</label>
                        <DatePicker
                          selected={filters.endDate}
                          onChange={(date) => handleFilterChange({ endDate: date })}
                          selectsEnd
                          startDate={filters.startDate}
                          endDate={filters.endDate}
                          minDate={filters.startDate || undefined}
                          className="w-full p-2 border rounded text-base"
                          placeholderText="End date"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsDateRangeOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => setIsDateRangeOpen(false)}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Status Filter */}
          {showStatusFilter && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <div className="relative">
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange({ status: e.target.value })}
                  className="w-full p-2 border rounded-lg bg-background text-base focus:ring-2 focus:ring-primary focus:border-transparent appearance-none pr-8"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <div className="relative">
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange({ category: e.target.value })}
                className="w-full p-2 border rounded-lg bg-background text-base focus:ring-2 focus:ring-primary focus:border-transparent appearance-none pr-8"
              >
                <option value="all">All Categories</option>
                <option value="analytics">Analytics</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Export Buttons */}
        {showExport && (
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            <Button
              onClick={onExportCSV}
              variant="outline"
              className="flex items-center gap-2 text-base px-4 py-2"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
            <Button
              onClick={onExportPDF}
              variant="outline"
              className="flex items-center gap-2 text-base px-4 py-2"
            >
              <FileText className="h-4 w-4" />
              Export PDF
            </Button>
            <div className="ml-auto flex items-center text-sm text-muted-foreground">
              {hasActiveFilters && (
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                  Filters Active
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
