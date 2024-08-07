import React from 'react'
import Constant from '../_utils/Constant'



function Hero() {
  return (
    <div className='mt-10 flex items-center justify-center h-screen'>
        <section className="bg-white h-screen text-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    <span className='text-primary'>Upload, Save</span> and easily <span className='text-primary'> Share</span> your files in one place
                </h1>

                <div className="mt-8 flex  justify-center  gap-4">
                    <a
                    className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
                    href="/upload"
                    >
                    Get Started
                    </a>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero