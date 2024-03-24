"use client"

import React from 'react'

import Image from 'next/image'
import {useRouter} from 'next/navigation'

const Logo = () => {

    const router = useRouter()

    return (
        <Image onClick={()=> router.push('/')} className='hidden md:block cursor-pointer' height={40} width={40} src='/images/logo.svg' alt='Logo'/>
  )
}

export default Logo