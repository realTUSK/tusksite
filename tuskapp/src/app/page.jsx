import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MatrixRain from "@/components/MatrixRain"
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export const metadata = {
  title: 'Team TUSK Home',
  description: 'Team TUSK\'s little corner on the internet',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <MatrixRain />
      <div className="font-mono min-h-screen flex flex-col relative z-10">
        {/* Container with max width and padding */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex flex-col justify-center flex-grow sm:mt-16 my-auto backdrop-blur-sm bg-black/10 rounded-lg p-8">
            <div className="relative">
              {/* Text Content */}
              <div className="space-y-6 md:space-y-8 max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  TUSK is a CTF Team from VIT Bhopal University
                </h1>
                
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                We're a team of students at VITB who hack, play, and tackle challenges together. 
                We're dedicated to fostering a better hacking culture on campus. 
                If that sounds like your kind of vibe, come play with us!
                </p>

                <div className="flex flex-col gap-6">
                  <Link 
                    className="inline-block text-lg md:text-xl text-white 
                             border-2 border-white px-8 py-4 
                             transition-all duration-300 ease-in-out
                             hover:border-tusklet hover:text-tusklet
                             
                             max-w-fit" 
                    href="/playwithtusk"
                  >
                    Play With TUSK
                  </Link>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}
