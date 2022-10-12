import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as I from '@heroicons/react/24/solid'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:murilolbgomes@gmail.com?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-center md:text-left xl:flex-row max-w-7xl justify-evenly px-10 y mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[8px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 items-center">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need{' '}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>
        <div className="flex items-center space-x-5">
          <I.PhoneIcon className="text-[#F7AB0a] h-7 animate-pulse" />
          <p>+55 (11)948071579</p>
        </div>
        <div className="flex items-center space-x-5">
          <I.EnvelopeIcon className="text-[#F7AB0a] h-7 animate-pulse" />
          <p>murilolbgomes@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5">
          <I.MapIcon className="text-[#F7AB0a] h-7 animate-pulse" />
          <p>+55 (11)948071579</p>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            className="bg-[#F7AB0A]/90 py-5 px-10 rounded-md text-black font-bold hover:bg-[#F7AB0A] transition-all"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
