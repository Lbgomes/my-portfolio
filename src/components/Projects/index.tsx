import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import Link from 'next/link'

import * as S from './styles'
export default function Projects() {
  const projects = [1, 2, 3, 4, 5]

  return (
    <S.Container
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[8px] text-gray-500 text-2xl">
        Projects
      </h3>
      <S.SliderContainer>
        {/* Projects */}
        <Slider arrows={false} dots autoplay speed={500}>
          {projects.map((item, index) => (
            <S.CardContainer key={index}>
              <S.ImageContainer
                as={motion.div}
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Image alt="" src="/img/beta.png" fill className="relative" />
              </S.ImageContainer>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                <Link href="/betablocks" className="">
                  <h4 className="text-4xl font-semibold text-center ">
                    <span className="underline decoration-[#F7AB0A]/50 cursor-pointer">
                      Case Study {index + 1} of {projects.length}:
                    </span>{' '}
                    UPS clone
                  </h4>
                </Link>
                <p className="text-lg text-center md:text-left">
                  Betablocks is an American company that allow people to create
                  their own marketplace to sell their digital assets, including
                  NFTs, using cryptocurrencies to buy and sell these digital
                  items. They hired Softwrap to create their entire system, from
                  landing page to the web platform. The project took about six
                  months to be completed.
                </p>
              </div>
            </S.CardContainer>
          ))}
        </Slider>
      </S.SliderContainer>
      <S.BackgroundContainer />
      <div className="w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </S.Container>
  )
}
