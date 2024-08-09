'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function Header() {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header className="bg-white dark:bg-purple-900">
        <div className="flex items-center justify-between mx-4 p-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src='/file.png' className='transform hover:scale-105 transition-transform transition-linear-custom duration-10' width={38} height={100} alt="Logo" />
          </div>


          
          <nav aria-label="Global">
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <a
                  className="text-white bg-primary px-4 py-3 hover:bg-gray-900 rounded-lg"
                  href="/upload"
                >
                  Get Started
                </a>
                
              </li>
            </ul>
          </nav>
   
        </div>

       
      </header>
    </div>
  )
}

export default Header
