import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return(
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
    )
}