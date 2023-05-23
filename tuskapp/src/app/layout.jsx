import './globals.css'
import { Inconsolata, Source_Code_Pro } from 'next/font/google'
import Head from 'next/head'

const inconso = Inconsolata({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inconso',
})

const scpro = Source_Code_Pro({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-scpro',
})

export const metadata = {
  title: 'Team TUSK Home',
  description: 'Team TUSK\'s little corner on the internet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inconso.variable} ${scpro.variable} bg-black text-white`}>{children}</body>
    </html>
  )
}
