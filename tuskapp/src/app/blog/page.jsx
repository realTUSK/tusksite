import Footer from "@/components/Footer"
import Header from "@/components/Header.jsx"
import Card from "@/components/Card"
import matter from "gray-matter"
import fs from 'fs'
import path from 'path'

export default function Home() {
    const posts = getPosts()
    return(
        <div className='flex flex-col select-none font-scpro p-3 h-max min-h-screen'>
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

function getPosts() {
    const files = fs.readdirSync(path.join('src', 'posts'))
    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownData = fs.readFileSync(path.join('src', 'posts', filename), 'utf-8')
        const frontmatter = matter(markdownData)
        return {
            slug: slug,
            metadata: frontmatter.data
        }
    })
    return posts
}