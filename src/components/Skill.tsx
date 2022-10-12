import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/future/image'
interface SkillProps {
  directionLeft?: boolean
}
export default function Skill({ directionLeft = true }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="group relative  flex cursor-pointer border border-gray-500 rounded-full object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          alt=""
          src="/img/javascript-logo-8892AEFCAC-seeklogo.com.png"
          fill
          className="rounded-full object-cover"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  )
}
