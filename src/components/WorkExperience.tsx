import React from 'react'

import { motion } from 'framer-motion'

import ExperieneCard from './ExperieneCard'

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[8px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex mt-6 overflow-x-scroll space-x-5 snap-x snap-mandatory">
        <ExperieneCard image="/img/soft.jpeg" />
        <ExperieneCard image="/img/soft.jpeg" />
        <ExperieneCard image="/img/soft.jpeg" />
        <ExperieneCard image="/img/soft.jpeg" />
      </div>
    </motion.div>
  )
}
