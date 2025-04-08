import React from 'react'

interface SectionTitleProps {
    text:string,
}

const SectionTitle = ({text}: SectionTitleProps) => {
  return (
    <h2 className='font-black font-titles text-main-dark/30 text-4xl lg:text-4xl tracking-tighter uppercase'>{text}</h2>
  )
}

export default SectionTitle