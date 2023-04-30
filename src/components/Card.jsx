import { useRouter } from "next/router"

export default function Card({ content, link }) {

    const router = useRouter()

    return(
        <div onClick={() => router.push(content.link)} className="flex flex-col w-[400px] h-[300px] gap-5 border-2 border-white hover:border-tusklet hover:shadow-gray-400 hover:shadow-lg p-3">
            <h1 className="flex h-3/6 w-full py-3 text-xl font-bold border-tusklet border-b-2">{content.name}</h1>
            <h2 className="text-lg md:text-xl py-1">{content.date}</h2>
            <aside className="flex flex-row flex-wrap self-start gap-3 w-full h-max">
                {
                    content.tags.map((tag, index) => {
                        return(
                            <h6 className="text-sm text-white text-center bg-tusklet rounded-full px-3 py-1" key={index}>{`#${tag}`}</h6>
                        )
                    })
                }
            </aside>
        </div>
    )
}