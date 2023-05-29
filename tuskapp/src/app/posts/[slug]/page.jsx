import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'
import getSingleMetadata from '@/components/getSingleMetadata'
import getAllMetadata from '@/components/getAllMetadata'
import getPost from '@/components/getPost'

export async function generateMetadata() {
    return {
        title: 'Post by TUSK Team',
        author: 'AUTHOR',
        description: 'DESCRIPTION',
    }
}

export const generateStaticParams = async () => {
    const posts = getAllMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

export default function Post({ params }) {

    const slug = params.slug
    const post = getPost(slug);
    const {title, date, author, excerpt} = post.data

    return(
        <>
            <div className='flex flex-col font-scpro h-max w-screen'>
                <Header />
                <main className="flex w-screen text-lg p-10 md:text-xl flex-col self-center h-max items-center gap-10 justify-center">
                    <article className='
                        flex flex-col h-max w-11/12 self-center
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
                    >
                        <section>
                            <h1 className="text-4xl md:text-5xl text-tusklet font-bold">{title}</h1>
                            <h3 className='text-tusklet'>{date} | written by {author}</h3>
                        </section>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    )
}
