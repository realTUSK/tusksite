import Card from "@/components/Card.jsx"
import Footer from "@/components/Footer"
import { articles } from '../articles/articles.js'
import Header from "@/components/Header.jsx"

export default function Home() {
    return(
        <div className='flex flex-col select-none font-scpro h-screen'>
            <Header />
            <main className="flex flex-row overflow-clip h-4/6 gap-10 p-5 lg:px-28 w-9/12 items-center justify-center">
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