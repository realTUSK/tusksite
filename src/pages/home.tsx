import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return(
        <div className='flex flex-col font-scpro h-screen w-screen'>
            <aside className="flex flex-row justify-between items-center p-10 lg:px-20 h-1/6">
                <Image className='w-[100px] md:w-[150px] lg:w-[200px]' src={'/tusk.png'} width={300} height={50} alt='tusk logo'></Image>
                <nav className='flex flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/about'}>/about</Link>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/blog'}>/blog</Link>
                    <Image className="w-[30px]" src={'/flag.png'} width={50} height={50} alt="flag icon"></Image>
                </nav>
            </aside>
            <main className="flex flex-row h-4/6 p-5 lg:px-28 w-screen items-center lg:items-start justify-center">
                <h1 className="text-3xl relative p-10 z-20 md:text-5xl lg:text-8xl flex h-100">We are VIT BhopalUniversity’s OfficialCTF Team — #TUSK2TheTop</h1>
                <Image className="absolute z-10" src={'/matrixeffect.png'} alt="matrix effect" width={300} height={300}></Image>
            </main>
            <footer className="flex flex-col h-1/6 w-full p-5 gap-3 items-center justify-center">
                <h6 className="text-sm md:text-lg text-center">© Team T.U.S.K 2022 - 2023. All rights reserved.</h6>
                <div className="flex flex-row items-center justify-center gap-10 w-full">
                    <Image src={'/ctftime.png'} alt="ctf time logo" width={100} height={24}></Image>
                    <Link href={'https://twitter.com'} target="blank">
                        <Image src={'/twitter.ico'} alt="twitter profile" width={28} height={28}></Image>
                    </Link>
                    <Link href={'https://github.com'} target="blank">
                        <Image src={'/github.png'} alt="github profile" width={28} height={28}></Image>
                    </Link>
                    <Link href={'mailto:someone@mail.com'} target="blank">
                        <Image src={'/mail.ico'} alt="mail icon" width={28} height={28}></Image>
                    </Link>
                </div>
            </footer>
        </div>
    )
}