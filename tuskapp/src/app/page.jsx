import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Favicons from "@/components/favicons"

export const metadata = {
  title: 'Team TUSK Home',
  description: 'Team TUSK\'s little corner on the internet',
}

export default function Home() {
  return (
    <>
      <Favicons />
      <div className={'flex flex-col select-none font-scpro h-max min-h-screen w-screen p-3'}>
        <Header />
        <main className="flex flex-col min-h-[65vh] h-max w-9/12 self-center gap-10 lg:px-28 items-start justify-center">
          <h1 className="text-3xl relative z-20 md:text-5xl lg:text-6xl flex h-100 font-bold">We are VIT Bhopal University’s Official CTF Team — #TUSK2TheTop</h1>
          <Link className="relative z-20 text-md md:text-2xl text-white hover:border-tusklet border-white border-2 p-5 hover:text-tusklet" href={'/error'}>Play Recruitment CTF</Link>
          <Image className="absolute z-10 self-end" src={'/resources/matrixeffect.png'} alt="matrix effect" width={300} height={300}></Image>
        </main>
        <Footer />
      </div>
    </>
  )
}
