import React from 'react'

interface OverlayProps {

    children: React.ReactNode,
    className?: string
}

const Overlay = ({children, className}: OverlayProps) => {
  return (
    <div className={`${className && className} h-full w-full bg-black/5`}>
        {children}
    </div>
  )
}

export default Overlay