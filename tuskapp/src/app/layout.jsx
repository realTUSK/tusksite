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
      <Head>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#0f0f0f" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${inconso.variable} ${scpro.variable} bg-black text-white`}>{children}</body>
    </html>
  )
}
