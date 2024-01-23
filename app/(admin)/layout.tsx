import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Header from '../(user)/_layoutComponents/Header/Header';
import '../globals.css';
import styles from './layout.module.css';

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
        <div className={styles.titleBar}>
          <h3>Welcome to Admin Console</h3>
          <Link href="/">show page</Link>
        </div>
        {children}
        <footer className={styles.footerContainer}>
            <h5>LA FABRICA DEL GUSTO</h5>
            <div className={styles.underline}>
                <hr/> <span>&#10045; &#10045; &#10045;</span> <hr/>
            </div>
        </footer>
      </body>
    </html>
  )
}
