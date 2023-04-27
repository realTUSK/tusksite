import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return(
        <div className='flex flex-col font-scpro h-screen w-screen'>
            <aside className="flex flex-col gap-5 md:flex-row justify-between items-center p-10 lg:px-20 h-1/6">
                <Image src={'/TUSK.png'} width={200} height={200} alt='tusk logo'></Image>
                <nav className='flex flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/home'}>/home</Link>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/blog'}>/blog</Link>
                    <Image className="w-[30px]" src={'/flag.png'} width={50} height={50} alt="flag icon"></Image>
                </nav>
            </aside>
            <main className="flex text-lg md:text-xl flex-col h-4/6 p-5 lg:px-28 w-screen items-start gap-10 justify-center">
                <h1 className="text-4xl font-bold">About Us</h1>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quia natus sunt illo ratione necessitatibus, exercitationem accusamus cupiditate ipsam perferendis id blanditiis ducimus corporis pariatur dolorum non sed quas obcaecati.</h6>
            </main>
            <footer className="flex flex-col h-1/6 w-full p-5 gap-3 items-center justify-center">
                <h6 className="text-sm md:text-lg text-center">© Team T.U.S.K 2023. All rights reserved.</h6>
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