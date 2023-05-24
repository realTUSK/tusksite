export default function Card({ matter }) {

    const { title, date, author } = matter.metadata

    return(
        <a href={`/posts/${matter.slug}`}>
            <div className="flex flex-col w-[300px] h-[300px] gap-5 text-white border-2 border-white hover:border-tusklet hover:shadow-gray-400 hover:shadow-lg p-3">
                <h1 className="flex h-3/6 w-full py-3 text-xl font-bold border-tusklet border-b-2">{title}</h1>
                <h2 className="text-lg md:text-xl py-1">{date}</h2>
                <aside className="flex flex-row flex-wrap self-start gap-3 w-full h-max">
                    by&nbsp;{author}
                </aside>
            </div>
        </a>
    )
}