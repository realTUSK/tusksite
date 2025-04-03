import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MatrixRain from "@/components/MatrixRain"

export const metadata = {
    title: 'About TUSK',
    description: 'answering all your questions about us',
  }

export default function About() {
    return(
        <>
            <MatrixRain />
            <div className="font-mono min-h-screen flex flex-col relative z-10">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex flex-col min-h-screen">
                <Header />
                <main className="flex flex-col justify-center flex-grow sm:mt-16 my-auto backdrop-blur-sm bg-black/10 rounded-lg p-8">
                    <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                    <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quia natus sunt illo ratione necessitatibus, exercitationem accusamus cupiditate ipsam perferendis id blanditiis ducimus corporis pariatur dolorum non sed quas obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eligendi mollitia maxime ipsa ratione quos corrupti voluptates totam commodi deleniti! Saepe praesentium animi rem corporis ullam alias quibusdam unde vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates consequuntur similique quos sequi totam molestias at reiciendis corporis magni molestiae tempora aut ipsa laboriosam, eligendi vero accusantium qui nam.</h6>
                </main>
                <Footer />
                </div>
            </div>
        </>
    )
}