"use client"
import { File, Folder, House, Upload, User } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SideNav({ onItemSelect }) { // Accept onItemSelect as a prop
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
            id: 3, // Ensure unique IDs
            name: 'Contact Us',
            icon: User,
            path: '/contact'
        },
        {
            id: 3, // Ensure unique IDs
            name: 'Home',
            icon: House,
            path: '/'
        }
    ]

    const pathname = usePathname();

    const handleItemClick = (path) => {
        if (onItemSelect) {
            onItemSelect(); // Call the callback to close the sidebar
        }
    }

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b'>
                <Image src='/logo.svg' width={38} height={100} alt='Logo'/>
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item) => (
                    <Link 
                        key={item.id}
                        href={item.path}
                        onClick={() => handleItemClick(item.path)} // Handle item click
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
