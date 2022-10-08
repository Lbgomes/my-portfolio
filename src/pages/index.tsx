import React from 'react'

import About from 'components/About'
import Header from 'components/Header'
import Hero from 'components/Hero'
import WorkExperience from 'components/WorkExperience'
import type { NextPage } from 'next'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll z-0">
      <Head>
        <title>Murilo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* <Hero></Hero> */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* <About /> */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* <Experience></Experience> */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* <Skills></Skills> */}

      {/* <Projects></Projects> */}

      {/* <Contact Me></Contact Me> */}
    </div>
  )
}

export default Home
