import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'
import Image from 'next/future/image'

import * as S from './styles'
export default function Projects() {
  const projects = [1, 2, 3, 4, 5]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,

    slidesToShow: 1,
    slidesToScroll: 1
  }
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
        <Slider {...settings}>
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
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1} of {projects.length}:
                  </span>{' '}
                  UPS clone
                </h4>
                <p className="text-lg text-center md:text-left">
                  EnglishBay is a startup that seeks to bring quality
                  personalized education at an affordable price, where students
                  learn with foreign teachers focusing on the best learning
                  experience in the shortest time possible. They hired SoftWrap
                  to recreate their platform with better aesthetics and more
                  funcionalities.
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
