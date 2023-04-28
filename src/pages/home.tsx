import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Home() {
    return(
        <div className='flex flag-cursor flex-col select-none font-scpro h-screen w-screen'>
            <aside className="flex flex-col gap-5 md:flex-row justify-between items-center p-10 lg:px-20 h-1/6">
                <Image src={'/TUSK.png'} width={200} height={200} alt='tusk logo'></Image>
                <nav className='flex font-bold flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                    <Link className="hover:text-tusklet hover:animate-pulse" href={'/about'}>/about</Link>
                    <Link className="hover:text-tusklet hover:animate-pulse" href={'/blog'}>/blog</Link>
                    <Image className="w-[30px]" src={'/flag.png'} width={50} height={50} alt="flag icon"></Image>
                </nav>
            </aside>
            <main className="flex flex-col h-4/6 gap-10 p-8 lg:px-28 w-screen items-start justify-center">
                <h1 className="text-3xl relative z-20 md:text-5xl lg:text-7xl flex h-100 font-bold">We are VIT Bhopal University’s Official CTF Team — #TUSK2TheTop</h1>
                <Link className="relative z-20 text-md md:text-2xl hover:border-tusklet border-white border-2 p-3 hover:text-tusklet" href={'/'}>Play Recruitment CTF</Link>
                <Image className="absolute z-10 self-end" src={'/matrixeffect.png'} alt="matrix effect" width={300} height={300}></Image>
            </main>
            <Footer />
        </div>
    )
}