'use client'

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {

    const path =usePathname();

     useEffect(()=>{
        console.log(path);
     },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
<Image src={'/logo.png'} width={80} height={80} alt="AI Interview Mocker Logo" />
      <ul className=' md:flex gap-6'>
         <Link href={'/dashboard'}>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard' && 'text-primary font-bold' }`}>Dashboard</li>
        </Link>
        <Link href={'/dashboard/questions'}>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/questions' && 'text-primary font-bold' }`}></li></Link>
        <Link href={'/dashboard/upgrade'}>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/upgrade' && 'text-primary font-bold' }`}></li></Link>
        <Link href={'/dashboard/faq'}>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/faq' && 'text-primary font-bold' }`}>About</li>
        </Link>
        
      </ul>

      
      <UserButton/>
    </div>
    
  )
}


export default Header
