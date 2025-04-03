import Link from "next/link"
import Image from "next/image"
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="flex flex-col md:flex-row h-1/6 w-full self-center py-10 gap-5 lg:gap-0 items-center justify-center">
          <h6 className="text-sm md:text-[15px] w-full text-gray-400 text-center lg:text-left">© Team T.U.S.K {currentYear}. All rights reserved.</h6>
          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-end gap-5 w-full">
            <Link href={'https://ctftime.org/team/165776'} target="_blank" rel="noopener noreferrer">
              <Image src={'/resources/ctftime.png'} alt="CTFTime logo" width={100} height={24}></Image>
            </Link>
            
            <Link href={'mailto:realtusk.team@gmail.com'} target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} />
            </Link>
            
            {/* <Link href={'https://x.com/realtusk'} target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </Link> */}
            
            <Link href={'https://github.com/realtusk'} target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </Link>

            <Link href={'https://www.linkedin.com/company/team-tusk/'} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </footer>
    )
}