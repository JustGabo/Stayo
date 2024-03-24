"use client"

import Image from 'next/image'
import React from 'react'

import {Avatar as AvatarComponent,AvatarFallback,AvatarImage} from '@/components/ui/avatar'

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
  return (
    <Image className='rounded-full' height='30' width='30' alt='Avatar' src={src || '/usuario.jpg'}/>
  )
}

export default Avatar