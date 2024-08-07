import React from 'react';

function Hero() {
  return (
    <div className='flex items-center justify-center bg-white h-[90vh]'>
      <section className="flex flex-col items-center justify-center text-center w-full h-full  max-w-screen-xl">
        <div className="max-w-xl">
            <h1 className='text-4xl font-extrabold sm:text-5xl mb-'>Welome to <span className='text-primary'>FileFlow</span></h1>
          <h1 className="text-3xl font-extrabold sm:text-5xl mb-8">
            <span className='text-primary'>Upload, Save</span> and easily <span className='text-primary'>Share</span> your files in one place
          </h1>

          <div className="flex justify-center gap-4">
            <a
              className="rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
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
