import React from 'react'
import { SocialIcon } from 'react-social-icons'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-row justify-between max-w-7xl mx-auto p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/murilo-lb-gomes/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Lbgomes"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      {/* Avatar */}
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        {/*  */}
        <p className="uppercase md:inline-flex hidden font-extrabold text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  )
}
