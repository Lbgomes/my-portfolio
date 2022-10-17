import React from 'react'

import * as I from '@heroicons/react/24/solid'
import About from 'components/About'
import ContactMe from 'components/ContactMe'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import WorkExperience from 'components/WorkExperience'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Murilo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* <Hero></Hero> */}
      <section id="hero">
        <Hero />
      </section>

      {/* <About /> */}
      <section id="about">
        <About />
      </section>

      {/* <Experience></Experience> */}
      <section id="experience">
        <WorkExperience />
      </section>
      {/* <Skills></Skills> */}
      <section id="skills">
        <Skills />
      </section>
      {/* <Projects></Projects> */}
      <section id="projects">
        <Projects />
      </section>
      {/* <Contact Me></Contact Me> */}
      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 right-1 ">
          <div className="flex justify-end mr-5">
            <span className="cursor-pointer flex justify-center h-10 w-10 filter grayscale hover:grayscale-0 bg-yellow-500  rounded-full">
              <I.ArrowUpIcon width={25} />
            </span>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
