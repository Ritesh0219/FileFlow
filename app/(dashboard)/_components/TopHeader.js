import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader({ onMenuClick }) {
  return (
    <div className='flex  gap-6 p-5 border-b items-center justify-between md:justify-end'>
      {/* Icon for menu toggle (visible only on small screens) */}
      <div>
      <button aria-label="Toggle menu" onClick={onMenuClick} className='md:hidden'>
        <AlignJustify />
      </button>
      </div>
      {/* Logo (hidden on larger screens) */}
      <div className='md:hidden'>
        <Image 
          src='/file.png' 
          width={38} 
          height={38} 
          alt='Site logo'
          className='transform hover:scale-105 transition-transform transition-linear-custom duration-10'
        />
      </div>

      {/* User button */}
      <div>
      <UserButton />
      </div>
    </div>
  )
}

export default TopHeader
