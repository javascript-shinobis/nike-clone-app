import { Inter, Oswald, Urbanist } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald'
});

export const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-urbanist',
    display: 'swap'
});