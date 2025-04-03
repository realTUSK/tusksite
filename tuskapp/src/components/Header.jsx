import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return(
        <header className="flex flex-col sm:flex-row items-center justify-between w-full py-4 gap-4">
          <Link href='/' className="w-[150px] sm:w-[175px] md:w-[200px] transition-transform hover:scale-105">
            <Image 
              src="/resources/tusk.png" 
              alt="Team TUSK logo" 
              width={200} 
              height={200} 
              priority={true}
              className="w-full h-auto"
            />
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <Link 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold
                         text-white hover:text-tusklet transition-colors duration-300
                         hover:animate-pulse" 
              href="/"
            >
              /home
            </Link>
            {/* <Link 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold
                         text-white hover:text-tusklet transition-colors duration-300
                         hover:animate-pulse" 
              href="/about"
            >
              /about
            </Link> */}
            <Link 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold
                         text-white hover:text-tusklet transition-colors duration-300
                         hover:animate-pulse" 
              href="/blog"
            >
              /blog
            </Link>
            <Image 
              src="/resources/flag.png" 
              width={30} 
              height={30} 
              alt="Flag icon"
              className="w-[20px] sm:w-[25px] md:w-[30px] h-auto"
            />
          </nav>
        </header>
    )
}