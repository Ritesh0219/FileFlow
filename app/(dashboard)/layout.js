"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Function to toggle sidebar visibility
  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => !prevState)
  }

  // Function to close the sidebar
  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className='flex'>
      <div 
        className={`fixed inset-y-0 z-50 bg-white shadow-md ${isSidebarOpen ? 'block' : 'hidden'} md:block`} 
        style={{ width: '230px' }} 
      >
        <SideNav onItemSelect={handleSidebarClose} />
      </div>

      <div className='flex-1'>
        <div className={`md:ml-64 ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
          <TopHeader onMenuClick={handleSidebarToggle} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
