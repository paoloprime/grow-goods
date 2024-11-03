import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Roboto } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Let's Grow - A new way of funding Public Goods",
  description: 'Fund public goods in a new and innovative way',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}