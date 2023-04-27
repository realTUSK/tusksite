import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';


export default function Landing() {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 2000);
  })

  return (
    <main
      className='flex flex-col h-screen w-screen items-center justify-center'
    >
      <div className="relative w-full animate-pulse h-full select-none flex items-center justify-center before:absolute before:h-[300px] before:w-[480px] before:rounded-full before:bg-gradient-radial before:blur-3xl after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl before:from-transparent before:to-fuchsia-200/10 after:from-fuchsia-700 after:via-blue-800 before:lg:h-[360px]">
        <Image
          className="relative w-8/12 md:w-2/5 lg:w-1/5 drop-shadow-[0_0_0.5rem_#ffffff70]"
          src={'/tusk.png'}
          alt="tusk Logo"
          width={300}
          height={300}
        />
      </div>
    </main>
  )
}
