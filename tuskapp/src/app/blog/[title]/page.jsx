import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export function generateMetadata({ params }) {
    const title = params.title
    const post = getPost(title)
    const {author, excerpt} = post.metadata
    return {
        title: 'TUSK Article: ' + title,
        author: author,
        description: excerpt,
    }
}

export default function Post({ params }) {

    const post = getPost(params.title)
    const {title, date, author, excerpt} = post.metadata

    return(
        <>
            <div className='flex flex-col font-scpro h-max min-h-screen p-3 w-screen'>
                <Header />
                <main className="flex text-lg py-10 pt-20 md:text-xl flex-col h-max min-h-[65vh] lg:h-4/6 w-8/12 self-center items-start gap-10 justify-center">
                    <h1 className="text-4xl md:text-5xl text-tusklet font-bold">{title}</h1>
                    <h3 className='text-tusklet'>{date} | written by {author}</h3>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </main>
                <Footer />
            </div>
        </>
    )
}

function getPost(title) {
    const files = fs.readdirSync('posts')
    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownData = fs.readFileSync(('posts/' + filename), 'utf-8')
        const frontmatter = matter(markdownData)
        return {
            slug: slug,
            metadata: frontmatter.data
        }
    })
    return posts[0]
}