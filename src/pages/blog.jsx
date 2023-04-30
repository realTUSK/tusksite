import Card from "@/components/Card.jsx"
import Footer from "@/components/Footer"
import { articles } from '../articles/articles.js'
import Header from "@/components/Header.jsx"
import { useEffect, useState } from "react"

export default function Home() {
    // hooks
    const [filters, setFilters] = useState([])
    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress, { passive: true })
        return(() => {
            document.removeEventListener('keypress', handleKeyPress)
        })
    })

    // handlers
    const handleKeyPress = (e) => {
        if(e.key === 'Enter')
            changeHandler()
    }

    const changeHandler = () => {
        const field = document.getElementById('tag-field')
        const value = field.value.toLowerCase().trim()
        const updatedFilters = [...filters]
        if(!updatedFilters.includes(value))
            updatedFilters.push(value)
        field.value = ''
        setFilters(updatedFilters)
    }

    const removeFilter = (filter) => {
        const updatedFilters = [...filters]
        updatedFilters.splice(updatedFilters.indexOf(filter), 1)
        setFilters(updatedFilters)
    }

    const removeAllFilters = () => {
        setFilters([])
    }

    const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));

    return(
        <div className='flex flex-col select-none font-scpro h-screen min-h-screen'>
            <Header />
            <section className="flex self-center py-10 gap-5 w-9/12 h-max flex-row justify-center items-center">
                <input id="tag-field" className="flex flex-row w-4/6 lg:w-3/6 h-14 font-inconso text-black text-xl p-5 rounded-md" type="text" placeholder="#tag" />
                <button onClick={changeHandler} className="flex w-10 lg:w-14 h-10 lg:h-14 text-center hover:shadow-sm hover:shadow-white justify-center items-center rounded-full bg-tusklet">⮐</button>
            </section>
            <section className="flex self-center py-5 gap-3 w-9/12 h-max flex-row flex-wrap justify-center items-center">
                {
                    filters.length>0 && <h6 onClick={removeAllFilters} className="flex w-max h-max text-sm text-white text-center bg-tusklet rounded-full px-5 py-1">⤬&nbsp;Clear Filters</h6>
                }
                {
                    filters?.map((filter, index) => {
                        return(
                            <h6 onClick={() => removeFilter(filter)} className="flex w-max h-max text-sm text-white text-center bg-tusklet rounded-full px-5 py-1" key={index}>⤬&nbsp;{`#${filter}`}</h6>
                        )
                    })
                }
            </section>
            <main className="flex flex-row flex-wrap gap-10 self-center h-max py-10 w-9/12 items-center justify-center">
                {
                    articles.map((article) => {
                        if(filters.length === 0) {
                            return(
                                <Card content={article.details} key={article.key} />
                            )
                        }
                        else if(filters.every(item => article.details.tags.includes(item))) {
                            return(
                                <Card content={article.details} key={article.key} />
                            )
                        }
                        else {
                            return(<></>)
                        }
                    })
                }
            </main>
            <Footer />
        </div>
    )
}