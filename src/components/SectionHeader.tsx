import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

const SectionHeader = ({children, className}: Props) => {
  return (
    <h1 className={`${className} font-montserrat text-3xl font-bold uppercase`}>
        {children}
    </h1>
  )
}

export default SectionHeader