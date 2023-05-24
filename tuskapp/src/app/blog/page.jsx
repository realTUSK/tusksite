import Footer from "@/components/Footer"
import Header from "@/components/Header.jsx"
import Card from "@/components/Card"
import getAllMetadata from "@/components/getAllMetadata"

export const metadata = {
    title: 'The TUSK Blog',
    description: 'Team TUSK\'s kooky experiments',
}

export default function Home() {
    const posts = getAllMetadata()
    return(
        <div className='flex flex-col select-none font-scpro p-3 h-max min-h-screen w-screen'>
            <Header />
            <main className="flex flex-row flex-wrap gap-10 py-10 self-center h-max min-h-[65vh] items-center justify-center">
                {
                    posts.map((data, index) => {
                        return(
                            <Card matter={data} key={index} />
                        )
                    })
                }
            </main>
            <Footer />
        </div>
    )
}
