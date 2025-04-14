import React from 'react'

interface SectionTitleProps {
    text:string,
}

const SectionTitle = ({text}: SectionTitleProps) => {
  return (
    <h2 className='font-black font-titles text-main-dark text-center text-4xl lg:text-6xl uppercase tracking-tighter'>{text}</h2>
  )
}

export default SectionTitle