import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <section className='h-[100dvh] flex flex-col items-center justify-center text-center'>
        <Image src={'/common/VA_logo.png'} alt='Logo' width={300} height={300} className='w-[150px] mb-6'/>
        <h1 className='text-4xl lg:text-5xl font-black tracking-tighter'>Ooops, Nothnin&#39;s Here!</h1>
        <p className='text-lg lg:text-xl tracking-tighter py-6 '>You must have taken a wrong turn. <br /> Get back on the right tracks now!</p>
        <Link href={'/'} className='px-10 py-4 bg-main-dark text-white font-semibold tracking-tighter uppercase'>Homepage</Link>
    </section>
  )
}

export default ErrorPage