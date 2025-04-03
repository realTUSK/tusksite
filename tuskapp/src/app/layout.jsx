import './globals.css'
import { Source_Code_Pro, Source_Sans_3 } from 'next/font/google'

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal'],
  weights: ['400', '700'],
  variable: '--font-scp',
  fallback: ['monospace'],
})

export const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal'],
  weights: ['400', '700'],
  variable: '--font-ssp',
  fallback: ['sans-serif'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} ${sourceSans3.variable} bg-black text-white`}>{children}</body>
    </html>
  )
}
