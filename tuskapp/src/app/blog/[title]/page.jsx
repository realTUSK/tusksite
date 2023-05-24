import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export function generateMetadata({ params }) {
    const slug = params.title
    const post = getPost(slug)
    const {title, author, excerpt} = post.metadata
    return {
        title: 'TUSK Article: ' + title,
        author: author,
        description: excerpt,
    }
}

export function generateStaticParams() {
    const files = fs.readdirSync('posts')
    return files.map((filename) => {
        const slug = filename.replace('.md', '')
        return {
            slug: slug
        }
    })
}

function getPost(title) {
    const markdownFile = fs.readFileSync(`posts/${title}.md`)
    const post = matter(markdownFile)
    return {
        metadata: post.data,
        content: post.content,
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
                    <article className='
                    prose prose-invert 
                    prose-headings:text-tusklet 
                    prose-a:text-tusklet 
                    prose-a:underline 
                    hover:prose-a:text-white 
                    text-white prose-slate 
                    prose-strong:text-white 
                    prose-blockquote:text-white 
                    prose-code:text-white
                    lg:prose-xl'
                    ><ReactMarkdown>{post.content}</ReactMarkdown></article>
                </main>
                <Footer />
            </div>
        </>
    )
}
