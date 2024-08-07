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
                  placeholder="Email address"
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
        </div>
      </section>
    </div>
  );
}

export default Contact;
