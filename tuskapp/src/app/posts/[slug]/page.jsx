import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'
import getSingleMetadata from '@/components/getSingleMetadata'
import getAllMetadata from '@/components/getAllMetadata'
import getPost from '@/components/getPost'

// export function generateMetadata(props) {
//     const slug = props.params.title
//     const post = getSingleMetadata(slug)
//     const {title, author, excerpt} = post.metadata
//     return {
//         title: 'TUSK Article: ' + title,
//         author: author,
//         description: excerpt,
//     }
// }

export const generateStaticParams = async () => {
    const posts = getAllMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

export default function Post(props) {

    const slug = props.params.slug
    const post = getPost(slug);
    const {title, date, author, excerpt} = post.data

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
