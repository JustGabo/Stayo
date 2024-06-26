"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps{
  title?: string;
  subtitle?: string;
  showReset?: boolean
}

const EmptyState:React.FC<EmptyStateProps> = ({showReset,subtitle="Try changing or removing domr of your filters",title="No exact matches"}) => {

  const router = useRouter()

  return (
    <section className='h-[80vh]  flex flex-col gap-2 justify-center items-center'>
      <Heading center title={title} subtitle={subtitle}/>
      <article className='w-48 mt-4'>
        {showReset && (
          <Button outline label='Remove all filters' onClick={()=>router.push('/')}/>
        )}
      </article>
    </section>
  )
}

export default EmptyState