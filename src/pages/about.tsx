import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Home() {
    return(
        <div className='flex select-none flex-col font-scpro h-screen w-screen'>
            <aside className="flex flex-col gap-5 md:flex-row justify-between items-center p-10 lg:px-20 h-1/6">
                <Image src={'/TUSK.png'} width={200} height={200} alt='tusk logo'></Image>
                <nav className='flex flex-row gap-5 md:gap-10 md:text-2xl text-lg'>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/home'}>/home</Link>
                    <Link className="hover:text-blue-700 hover:animate-pulse" href={'/blog'}>/blog</Link>
                    <Image className="w-[30px]" src={'/flag.png'} width={50} height={50} alt="flag icon"></Image>
                </nav>
            </aside>
            <main className="flex text-lg md:text-xl flex-col h-4/6 p-10 lg:px-28 w-screen items-start gap-10 justify-start">
                <h1 className="text-7xl font-bold">About Us</h1>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quia natus sunt illo ratione necessitatibus, exercitationem accusamus cupiditate ipsam perferendis id blanditiis ducimus corporis pariatur dolorum non sed quas obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eligendi mollitia maxime ipsa ratione quos corrupti voluptates totam commodi deleniti! Saepe praesentium animi rem corporis ullam alias quibusdam unde vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates consequuntur similique quos sequi totam molestias at reiciendis corporis magni molestiae tempora aut ipsa laboriosam, eligendi vero accusantium qui nam.</h6>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quia natus sunt illo ratione necessitatibus, exercitationem accusamus cupiditate ipsam perferendis id blanditiis ducimus corporis pariatur dolorum non sed quas obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eligendi mollitia maxime ipsa ratione quos corrupti voluptates totam commodi deleniti! Saepe praesentium animi rem corporis ullam alias quibusdam unde vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates consequuntur similique quos sequi totam molestias at reiciendis corporis magni molestiae tempora aut ipsa laboriosam, eligendi vero accusantium qui nam.</h6>
            </main>
            <Footer />
        </div>
    )
}