import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Risheh Website Template Factory',
  description: 'Compose validated business website Build Specs from Risheh Factory contracts.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
