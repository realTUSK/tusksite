import MatrixRain from "@/components/MatrixRain"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import getAllMetadata from "@/components/getAllMetadata"

export const metadata = {
    title: 'TUSK Blog',
    description: 'Read our latest posts about cybersecurity, CTFs, and more',
}

export default function Blog() {
    const posts = getAllMetadata()
    return (
        <>
            {/* <MatrixRain /> */}
            <div className="font-mono min-h-screen flex flex-col relative z-10">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex flex-col min-h-screen">
                    <Header />

                    <main className="flex flex-col flex-grow sm:mt-16 my-auto backdrop-blur-sm bg-black/30 rounded-lg">
                        <div className="relative">
                            <div className="space-y-6 md:space-y-8 ">
                                {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Blog
                                </h1>
                                
                                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                                    Our thoughts on cybersecurity, CTFs, and everything in between.
                                </p> */}

                                {/* Blog posts grid */}
                                <div className="mt-12 flex flex-row flex-wrap gap-10 items-center justify-center">
                                    {posts.map((data, index) => (
                                        <Card matter={data} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    )
}
