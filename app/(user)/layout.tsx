import type { Metadata } from 'next';
import Header from './_layoutComponents/Header/Header';
import NavigationBar from "./_layoutComponents/NavigationBar/NavigationBar";
import Footer from './_layoutComponents/Footer/Footer';

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
    <>
          <Header/>
          <NavigationBar/>
          {children}
          <Footer/>
    </>
  );
}
