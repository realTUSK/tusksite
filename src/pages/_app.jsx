import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { Inconsolata, Source_Code_Pro } from 'next/font/google'

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

export default function App({ Component, pageProps }) {
  return(
      <main className={`${inconso.variable} ${scpro.variable}`}>
        <Component {...pageProps} />
      </main>
  )
}
