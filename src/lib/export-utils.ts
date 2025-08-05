import { TableRow } from '@/types/dashboard';

export const exportToCSV = (data: TableRow[], filename: string = 'export.csv') => {
  if (!data.length) return;

  // Get all unique keys from the data
  const headers = Array.from(new Set(data.flatMap(row => Object.keys(row))));
  
  // Create CSV content
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        // Escape commas and quotes in CSV
        return typeof value === 'string' && (value.includes(',') || value.includes('"'))
          ? `"${value.replace(/"/g, '""')}"`
          : value;
      }).join(',')
    )
  ].join('\n');

  // Create and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const exportToPDF = async (elementId: string, filename: string = 'export.pdf') => {
  // This would require a PDF library like jsPDF or react-pdf
  // For now, we'll just show an alert
  alert('PDF export functionality would be implemented with a library like jsPDF');
};

export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
};

export const generateMockData = (count: number = 50): TableRow[] => {
  const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Wilson', 'Diana Prince', 'Eva Green', 'Frank Miller'];
  const statuses = ['Paid', 'Pending', 'Failed'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    name: names[Math.floor(Math.random() * names.length)],
    email: `user${i + 1}@example.com`,
    amount: `$${(Math.random() * 500 + 50).toFixed(2)}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    date: formatDate(new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000))
  }));
};
