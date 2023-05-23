import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return(
        <aside className="flex flex-col gap-5 p-5 font-scpro md:flex-row justify-between self-center justify-self-start items-center h-max w-9/12">
            <a href='/'>
                <Image src={'/resources/tusk.png'} alt='tusk logo' width={200} height={200} priority={true}></Image>
            </a>
            <nav className='flex font-bold flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                <Link className="hover:text-tusklet hover:animate-pulse text-white" href={'/'}>/home</Link>
                <Link className="hover:text-tusklet hover:animate-pulse text-white" href={'/about'}>/about</Link>
                <Link className="hover:text-tusklet hover:animate-pulse text-white" href={'/blog'}>/blog</Link>
                <Image className="w-[30px]" src={'/resources/flag.png'} width={30} height={30} alt="flag icon"></Image>
            </nav>
        </aside>
    )
}