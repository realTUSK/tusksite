import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return(
        <footer className="flex flex-col lg:flex-row h-1/6 w-9/12 self-center gap-5 lg:gap-0 items-center justify-center">
            <h6 className="text-sm md:text-[15px] w-full text-gray-400 text-center lg:text-left">© Team T.U.S.K 2023. All rights reserved.</h6>
            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-end gap-5 w-full">
                <Image src={'/ctftime.png'} alt="ctf time logo" width={100} height={24}></Image>
                <Link href={'mailto:someone@mail.com'} target="blank">
                    <Image src={'/mail.png'} alt="mail icon" width={28} height={28}></Image>
                </Link>
                <Link href={'https://twitter.com'} target="blank">
                    <Image src={'/twitter.ico'} alt="twitter profile" width={28} height={28}></Image>
                </Link>
                <Link href={'https://github.com'} target="blank">
                    <Image src={'/github.png'} alt="github profile" width={28} height={28}></Image>
                </Link>
            </div>
        </footer>
    )
}