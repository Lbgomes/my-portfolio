import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import Image from 'next/future/image'
import Link from 'next/link'

import BackgroundCircles from './BackgroundCircles'

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name's Murilo Gomes",
      'The-guy-who-loves-Coffe',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <div className="rounded-full relative h-32 w-32">
        <Image
          src="/img/me.jpeg"
          alt="an image of me"
          fill
          className="rounded-full"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[4px]">
          software engineer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span>
            {text}
            <Cursor cursorColor="#ddc80c" />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButtons">about</button>
          </Link>
          <Link href="#experience">
            <button className="heroButtons">experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButtons">skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButtons">projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
