import Image from 'next/image'

export default function Loading() {

  return (
    <main
      className='flex flex-col h-screen w-screen items-center justify-center'
    >
      <div className="relative w-full animate-pulse h-full select-none flex items-center justify-center before:absolute before:h-[300px] before:w-[480px] before:rounded-full before:bg-gradient-radial before:blur-3xl after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl before:from-transparent before:to-fuchsia-200/10 after:from-fuchsia-700 after:via-blue-800 before:lg:h-[360px]">
        <Image
          className="relative w-2/6 lg:w-1/5 drop-shadow-[0_0_0.5rem_#ffffff70]"
          src={'/resources/tusk.png'}
          alt="TUSK Logo"
          width={100}
          height={100}
          priority={true}
        />
      </div>
    </main>
  )
}