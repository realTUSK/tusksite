import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Home() {
    return(
        <div className='flex flex-col select-none font-scpro h-screen w-screen'>
            <aside className="flex flex-col gap-5 md:flex-row justify-between items-center p-10 lg:px-20 h-1/6">
                <Image src={'/TUSK.png'} width={200} height={200} alt='tusk logo'></Image>
                <nav className='flex flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/about'}>/about</Link>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/blog'}>/blog</Link>
                    <Image className="w-[30px]" src={'/flag.png'} width={50} height={50} alt="flag icon"></Image>
                </nav>
            </aside>
            <main className="flex flex-col h-4/6 gap-10 p-5 lg:px-28 w-screen items-start justify-center">
                <h1 className="text-3xl relative z-20 md:text-5xl lg:text-8xl flex h-100 font-bold">VIT Bhopal University’s Official CTF Team — #TUSK2TheTop</h1>
                <Link className="relative z-20 text-lg border-blue-700 border-2 p-5 hover:bg-blue-700 hover:text-white" href={'/'}>Play recruitment CTF</Link>
                <Image className="absolute z-10 self-center" src={'/matrixeffect.png'} alt="matrix effect" width={300} height={300}></Image>
            </main>
            <Footer />
        </div>
    )
}