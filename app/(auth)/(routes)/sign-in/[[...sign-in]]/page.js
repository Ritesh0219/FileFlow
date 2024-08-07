import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          {/* Section element will be hidden on small screens */}
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 hidden lg:flex">
            <img
              alt="Background"
              src="./logo.svg"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to FileFlow
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Upload, Save and easily Share your files
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-2 sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              {/* Placeholder for smaller screens */}
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <span className="sr-only">Home</span>
                </a>
                <img
                  alt="FileFlow Logo"
                  src="./logo.svg"
                  className="h-24 w-auto mx-auto"
                />

                <h1 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl flex items-center justify-center">
                  Welcome to FileFlow
                </h1>

                <p className=" mb-4 leading-relaxed text-gray-500 flex items-center justify-center">
                  Upload, Save and easily Share your files
                </p>

                {/* Add logo after the welcome text */}
                
              </div>

              {/* Sign-Up Component */}
              <SignIn />
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
