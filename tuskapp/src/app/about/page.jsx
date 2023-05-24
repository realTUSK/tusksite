import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = {
    title: 'About TUSK',
    description: 'answering all your questions about us',
  }

export default function About() {
    return(
        <div className='flex select-none flex-col font-scpro h-max min-h-screen p-3 w-screen'>
            <Header />
            <main className="flex text-lg md:text-xl flex-col h-max min-h-[65vh] lg:h-4/6 w-8/12 self-center items-start gap-10 justify-center">
                <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quia natus sunt illo ratione necessitatibus, exercitationem accusamus cupiditate ipsam perferendis id blanditiis ducimus corporis pariatur dolorum non sed quas obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eligendi mollitia maxime ipsa ratione quos corrupti voluptates totam commodi deleniti! Saepe praesentium animi rem corporis ullam alias quibusdam unde vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates consequuntur similique quos sequi totam molestias at reiciendis corporis magni molestiae tempora aut ipsa laboriosam, eligendi vero accusantium qui nam.</h6>
            </main>
            <Footer />
        </div>
    )
}