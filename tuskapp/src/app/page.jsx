import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Head from "next/head"

export default function Home() {
  return (
    <div className={'flex flex-col select-none font-scpro h-max min-h-screen w-screen p-3'}>
        <Head>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f0f0f" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className="flex flex-col min-h-[65vh] h-max w-9/12 self-center gap-10 lg:px-28 items-start justify-center">
        <h1 className="text-3xl relative z-20 md:text-5xl lg:text-6xl flex h-100 font-bold">We are VIT Bhopal University’s Official CTF Team — #TUSK2TheTop</h1>
        <Link className="relative z-20 text-md md:text-2xl text-white hover:border-tusklet border-white border-2 p-5 hover:text-tusklet" href={'/error'}>Play Recruitment CTF</Link>
        <Image className="absolute z-10 self-end" src={'/resources/matrixeffect.png'} alt="matrix effect" width={300} height={300}></Image>
      </main>
      <Footer />
    </div>
  )
}
