import type { Metadata } from 'next';
import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  title: 'Sales Admin Panel',
  description: 'Proplens Sales Admin Panel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}