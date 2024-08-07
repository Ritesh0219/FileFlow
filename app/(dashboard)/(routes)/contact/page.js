'use client'
import React, { useState } from 'react';
import AlertMsg from '../upload/_components/AlertMsg'; // Adjust the import path according to your file structure

function Contact() {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' }); // State for validation errors
  const [alert, setAlert] = useState({ msg: '', type: '' }); // State for form submission alerts

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }
    if (!message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return; // Prevent form submission if validation fails
    }

    // Here you can use the state variables or send them to an API
    console.log({ name, email, message });

    // Set success alert message
    setAlert({ msg: 'Message sent successfully!', type: 'success' });

    // Clear the form after successful submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center">
     
        <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-2xl border border-gray-200">

          <h1 className="text-3xl font-extrabold sm:text-5xl mb-8 text-primary text-center">
            Contact FileFlow
          </h1>

          {/* Display Alert Message */}
          {alert.msg && (
            <AlertMsg msg={alert.msg} type='Email' className='mb-5' />
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border rounded-md">
                <label className="sr-only" htmlFor="name">Your Name</label>
                <input
                  className={`w-full rounded-lg border-gray-200 p-3 text-sm outline-none ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter your Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="border rounded-md">
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className={`w-full rounded-lg border-gray-200 p-3 text-sm outline-none ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter your Email address"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="border rounded-md">
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                className={`w-full rounded-lg border-gray-200 p-3 text-sm outline-none ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Message"
                rows="6"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-primary px-12 py-3 font-medium text-white text-lg sm:text-xl hover:bg-blue-800"
              >
                Contact
              </button>
            </div>
          </form>
          
          <div className='flex items-center justify-start mt-10 gap-4'>

            <a href="https://github.com/Ritesh0219" class="text-[#24292E] h-[23px] w-[23px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>

            <a href="https://www.linkedin.com/in/ritesh-jadhav-4079071b9" class="text-[#0073B2] h-[23px] w-[23px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
        </div>
        </div>
        
      </section>
    </div>
  );
}

export default Contact;
