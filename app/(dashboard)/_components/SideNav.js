"use client"
import { File, Folder, House, Upload } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Import usePathname

function SideNav() {
    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: Folder,
            path: '/files',
        },
        {
            id: 2,
            name: 'Home',
            icon: House,
            path: '/'
        }
    ]

    const pathname = usePathname(); // Get the current path

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b'>
                <Image src='/logo.svg' width={38} height={100} alt='Logo'/>
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item) => (
                    <Link 
                        key={item.id} // Add a key prop for list items
                        href={item.path} // Use Link's href prop for navigation
                    >
                        <button
                            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-600 ${pathname === item.path ? 'bg-blue-50 text-primary' : ''}`}
                        >
                            <item.icon />
                            <h2>{item.name}</h2>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav
