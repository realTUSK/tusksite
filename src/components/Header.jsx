import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return(
        <aside className="flex flex-col gap-5 md:flex-row justify-between self-center items-center h-1/6 w-9/12">
            <Image src={'/tusk.png'} alt='tusk logo' width={200} height={200} priority={true}></Image>
            <nav className='flex font-bold flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                <Link className="hover:text-tusklet hover:animate-pulse" href={'/home'}>/home</Link>
                <Link className="hover:text-tusklet hover:animate-pulse" href={'/about'}>/about</Link>
                <Link className="hover:text-tusklet hover:animate-pulse" href={'/blog'}>/blog</Link>
                <Image className="w-[30px]" src={'/flag.png'} width={30} height={30} alt="flag icon"></Image>
            </nav>
        </aside>
    )
}