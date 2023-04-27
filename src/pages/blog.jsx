import Image from "next/image"
import Link from "next/link"
import Card from "@/components/Card.jsx"
import Footer from "@/components/Footer"
import { articles } from '../articles/articles.js'

export default function Home() {
    return(
        <div className='flex flex-col select-none font-scpro h-screen'>
            <aside className="flex flex-col gap-5 md:flex-row justify-between items-center p-10 lg:px-20 h-1/6">
                <Image src={'/TUSK.png'} width={200} height={200} alt='tusk logo'></Image>
                <nav className='flex flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/home'}>/home</Link>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/about'}>/about</Link>
                    <Image className="w-[30px]" src={'/flag.png'} width={50} height={50} alt="flag icon"></Image>
                </nav>
            </aside>
            <main className="flex flex-row overflow-clip h-4/6 gap-10 p-5 lg:px-28 w-max items-center justify-center">
                {
                    articles.map((article) => {
                        return(
                            <Card handler={() => console.log(article.key)} content={article.details} key={article.key} />
                        )
                    })
                }
            </main>
            <Footer />
        </div>
    )
}