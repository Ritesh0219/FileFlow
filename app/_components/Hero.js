import React from 'react';

function Hero() {
  return (
    <div className='flex items-center justify-center bg-white h-[80vh]'>
      <section className="flex flex-col items-center justify-center text-center w-full h-full max-w-screen-xl mt-12">
        <div className="max-w-xl">
          <h1 className='text-4xl font-extrabold sm:text-5xl mb-4'>Welcome to <span className='text-primary'>FileFlow</span></h1>
          <h1 className="text-3xl font-extrabold sm:text-5xl mb-8">
            <span className='text-primary'>Upload, Save</span> and easily <span className='text-primary'>Share</span> your files in one place
          </h1>

          <div className="flex justify-center gap-4">
            <a
              className="rounded-lg bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
              href="/upload"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 w-full mt-8">
          <div className="flex items-center justify-center h-15 sm:h-20 lg:h-20 rounded-lg bg-blue-100 mx-4 sm:mx-6 p-4">
            <h1 className='text-sm sm:text-base lg:text-lg font-semibold text-primary text-center'>
              Upload files quickly and easily
            </h1>
          </div>
          <div className="flex items-center justify-center h-15 sm:h-20 lg:h-20 rounded-lg bg-blue-100 mx-4 sm:mx-6 p-4">
            <h1 className='text-sm sm:text-base lg:text-lg font-semibold text-primary text-center'>
              Share files securely with a link
            </h1>
          </div>
          <div className="flex items-center justify-center h-15 sm:h-20 lg:h-20 rounded-lg bg-blue-100 mx-4 sm:mx-6 p-4">
            <h1 className='text-sm sm:text-base lg:text-lg font-semibold text-primary text-center'>
              Store and access your files anytime
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
