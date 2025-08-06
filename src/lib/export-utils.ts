import { TableRow } from '@/types/dashboard';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Papa from 'papaparse';

export const exportToCSV = (data: TableRow[], filename: string = 'admybrand-export.csv') => {
  if (!data.length) {
    alert('No data to export');
    return;
  }

  try {
    // Get all unique keys from the data
    const headers = Array.from(new Set(data.flatMap(row => Object.keys(row))));
    
    // Create CSV content using PapaParse for better handling
    const csvContent = Papa.unparse({
      fields: headers,
      data: data.map(row => headers.map(header => row[header] || ''))
    });

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
      URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error('Error exporting CSV:', error);
    alert('Error exporting CSV file');
  }
};

export const exportToPDF = async (elementId: string, filename: string = 'admybrand-export.pdf') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('Element not found for PDF export');
      return;
    }

    // Create canvas from element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 297; // A4 width in mm (landscape)
    const pageHeight = 210; // A4 height in mm (landscape)
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add new pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save PDF
    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting PDF:', error);
    alert('Error exporting PDF file');
  }
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
