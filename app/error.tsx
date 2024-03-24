"use client"
import EmptyState from '@/components/EmptyState'
import React, { useEffect } from 'react'

interface ErrorStateProps{
    error: Error
}

const Error: React.FC<ErrorStateProps> = ({error}) => {
    useEffect(()=>{
        console.log(error)
    },[error])

    return (
        <EmptyState title='Uh Oh' subtitle='Something went wrong!'/>
    )
}

export default Error