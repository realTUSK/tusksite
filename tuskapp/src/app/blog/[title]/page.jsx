import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Post({ params }) {

    const post = getPost(params.title)
    const {title, date, author} = post.metadata

    return(
        <div className='flex flex-col font-scpro h-max min-h-screen p-3 w-screen'>
            <Header />
            <main className="flex text-lg py-10 pt-20 md:text-xl flex-col h-max min-h-[65vh] lg:h-4/6 w-8/12 self-center items-start gap-10 justify-center">
                <h1 className="text-4xl md:text-5xl text-tusklet font-bold">{title}</h1>
                <h3 className='text-tusklet'>{date} | written by {author}</h3>
                <div dangerouslySetInnerHTML={{__html: marked.parse(post.content)}}></div>
            </main>
            <Footer />
        </div>
    )
}

function getPost(title) {
    const markdownData = fs.readFileSync(path.join('src', 'posts', `${title}.md`), 'utf-8')
    const post = matter(markdownData)
    return {
        metadata: post.data,
        content: post.content,
    }
}