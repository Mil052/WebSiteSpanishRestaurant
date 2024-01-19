import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_layoutComponents/Header/Header';
import NavigationBar from "./_layoutComponents/NavigationBar/NavigationBar";
import Footer from './_layoutComponents/Footer/Footer';
import ReactQueryClientProvider from './_layoutComponents/ReactQueryClientProvider';
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
        <ReactQueryClientProvider>
          <Header/>
          <NavigationBar/>
          {children}
          <Footer/>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
