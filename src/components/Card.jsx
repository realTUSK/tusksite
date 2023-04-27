export default function Card({ content, handler }) {
    return(
        <div onClick={handler} className="flex w-[300px] h-[250px] border-2 hover:shadow-gray-400 hover:shadow-lg p-3">
            <h1>{content.name}</h1>
        </div>
    )
}