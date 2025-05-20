import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter ({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Space Portfolio',
  description: 'Este es mi portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <body 
    className={`${inter.className} ${openSans.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
    {children}
  </body>
</html>

  );
}