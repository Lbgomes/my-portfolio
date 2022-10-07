import React from 'react'

import About from 'components/About'
import Header from 'components/Header'
import Hero from 'components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-scroll z-0">
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
      <section id="About" className="snap-center">
        <About />
      </section>

      {/* <Experience></Experience> */}

      {/* <Skills></Skills> */}

      {/* <Projects></Projects> */}

      {/* <Contact Me></Contact Me> */}
    </div>
  )
}

export default Home
