'use client';

import { useState, useMemo } from 'react';
import { TableRow, TableColumn } from '@/types/dashboard';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, Search, Download, Filter } from 'lucide-react';
import { exportToCSV, generateMockData } from '@/lib/export-utils';

const columns: TableColumn[] = [
  { key: 'name', label: 'Customer', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'amount', label: 'Amount', sortable: true },
  { key: 'status', label: 'Status', sortable: false },
  { key: 'date', label: 'Date', sortable: true },
];

export function DataTable() {
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Use generated mock data for more realistic pagination
  const mockData = useMemo(() => generateMockData(50), []);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handleExport = () => {
    exportToCSV(filteredAndSortedData, `transactions-${new Date().toISOString().split('T')[0]}.csv`);
  };

  const getStatusBadge = (status: string | number | boolean | Date) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium transition-colors";
    const statusStr = status?.toString().toLowerCase() || '';
    switch (statusStr) {
      case 'paid':
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
      case 'failed':
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`;
    }
  };

  const filteredAndSortedData = useMemo(() => {
    return mockData
      .filter(row => {
        const matchesSearch = Object.values(row).some(value => 
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesStatus = statusFilter === 'all' || (row.status && row.status.toString().toLowerCase() === statusFilter);
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        if (!sortField) return 0;
        const aValue = a[sortField];
        const bValue = b[sortField];
        
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
  }, [mockData, searchTerm, statusFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
      <div className="p-6 border-b bg-muted/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={handleExport}
          >
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          
          <div className="relative">
            <Filter className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-8 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer transition-all"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/30">
              {columns.map((column) => (
                <th key={column.key} className="p-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{column.label}</span>
                    {column.sortable && (
                      <button
                        onClick={() => handleSort(column.key)}
                        className="hover:bg-muted rounded p-1 transition-all duration-200 hover:scale-110"
                      >
                        {sortField === column.key ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="w-3 h-3 text-primary" />
                          ) : (
                            <ChevronDown className="w-3 h-3 text-primary" />
                          )
                        ) : (
                          <ChevronDown className="w-3 h-3 opacity-50" />
                        )}
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr 
                key={row.id} 
                className={`border-b hover:bg-muted/30 transition-all duration-200 hover:scale-[1.01] ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                }`}
              >
                <td className="p-4">
                  <div className="font-medium text-sm">{row.name?.toString()}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm text-muted-foreground">{row.email?.toString()}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-medium">{row.amount?.toString()}</div>
                </td>
                <td className="p-4">
                  <span className={getStatusBadge(row.status)}>
                    {row.status?.toString()}
                  </span>
                </td>
                <td className="p-4">
                  <div className="text-sm text-muted-foreground">{row.date?.toString()}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t bg-muted/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredAndSortedData.length)} of{' '}
            {filteredAndSortedData.length} transactions
          </span>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="transition-all duration-200"
            >
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const page = i + Math.max(1, currentPage - 2);
                if (page > totalPages) return null;
                
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0 transition-all duration-200"
                  >
                    {page}
                  </Button>
                );
              })}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="transition-all duration-200"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
