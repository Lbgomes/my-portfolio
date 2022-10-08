import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/future/image'

interface ExperieneCardProps {
  image: string
}
export default function ExperieneCard({ image }: ExperieneCardProps) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden  hover:opacity-100">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center relative"
      >
        <Image src={image} alt="logo company" fill className="rounded-full" />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4>Front-end Developer</h4>
        <p className="font-bold text-2xl mt-1">Softwrap</p>
        <div className="flex space-x-2 my-2">
          <div className="h-10 w-10 rounded-full relative">
            <Image
              src="/img/javascript-logo-8892AEFCAC-seeklogo.com.png"
              alt="javascript"
              fill
            />
          </div>
          <div className="h-10 w-10 rounded-full relative">
            <Image
              src="/img/javascript-logo-8892AEFCAC-seeklogo.com.png"
              alt="javascript"
              fill
            />
          </div>
          <div className="h-10 w-10 rounded-full relative">
            <Image
              src="/img/javascript-logo-8892AEFCAC-seeklogo.com.png"
              alt="javascript"
              fill
            />
          </div>
        </div>
        <p className="uppercase py-5 text-gray-300">start - finish</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            some things some things some things some things some things some
            things some things some things
          </li>
          <li>
            some things some things some things some things some things some
            things some things some things
          </li>
          <li>
            some things some things some things some things some things some
            things some things some things
          </li>
        </ul>
      </div>
    </article>
  )
}
