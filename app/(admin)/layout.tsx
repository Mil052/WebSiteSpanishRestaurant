import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../(user)/_layoutComponents/Header/Header';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'La Fabrica Del Gusto / learning project',
  description: 'This is my learning project for Next.js and React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header/>
        <h3>Welcome to Admin Console</h3>
        {children}
      </body>
    </html>
  );
}
