import React from 'react'
import Image from 'next/image'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const recentProjects = [
    {
      title: "Powerful Interfaces",
      description:
        "Design user interfaces that are both beautiful and functional using the latest front-end tools.",
      content: <Image src="/images/github.jpeg" width={300} height={300} alt="UI" />,
    },
    {
      title: "Secure & Scalable Backends",
      description:
        "Leverage modern backend stacks like Node.js and PHP to build fast, secure, and scalable apps.",
      content: <Image src="/images/github.jpeg" width={300} height={300} alt="Backend" />,
    },
    {
      title: "Cross-Platform Development",
      description:
        "Reach more users by building with technologies like Flutter for mobile, and Next.js for web.",
      content: <Image src="/images/github.jpeg" width={300} height={300} alt="Cross Platform" />,
    },
  ];
export default function Experience() {
  return (
    <div className='w-full h-full px-4 py-20'>
        <h1>Recent Projects</h1>
        <StickyScroll content={recentProjects}/>
    </div>
  )
}
