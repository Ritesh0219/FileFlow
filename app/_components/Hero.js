import React from 'react';

function Hero() {
  return (
    <div className='flex items-center justify-center bg-white h-[80vh]'>
      <section className="flex flex-col items-center justify-center text-center w-full h-full max-w-screen-xl mt-12">
        <div className="max-w-xl">
          <h1 className='text-4xl font-extrabold sm:text-5xl mb-4'>Welcome to <span className='text-primary'>FileFlow</span></h1>
          <h1 className="text-3xl font-extrabold sm:text-5xl mb-8">
            <span className='text-primary'>Upload, Save</span> and <span className='text-primary'>Share</span> your files in one place
          </h1>

          <div className="flex justify-center gap-4">
            <a
              className="rounded-lg  bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-primary sm:w-auto
              transform hover:scale-105 transition-transform transition-linear-custom duration-10"
              href="/upload"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
 