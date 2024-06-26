"use client"

import React, { useMemo } from 'react'
import {Search as SearchIcon} from 'lucide-react'
import useSearchModal from '@/app/hooks/useSearchModal'
import { useSearchParams } from 'next/navigation'
import useCountries from '@/app/hooks/useCountries'
import { differenceInDays } from 'date-fns'

const Search = () => {

    const searchModal = useSearchModal()
    const params = useSearchParams()
    const {getByValue} = useCountries()

    const locationValue = params?.get('locationValue')
    const startDate = params?.get('startDate')
    const endDate = params?.get('endDate')
    const guestCount = params?.get('guestCount')

    const locationLabel = useMemo(()=>{
        if(locationValue){
            return getByValue(locationValue as string)?.value
        }

        return 'Anywhere'
    },[getByValue, locationValue])

    const durationLabel = useMemo(()=>{
        if(startDate && endDate){
            const start = new Date(startDate as string)
            const end = new Date(endDate as string)
            let diff = differenceInDays(end, start)

            if(diff == 0){
                diff = 1
            }

            return `${diff} Days`
        }

        return 'Any Week'
    },[startDate, endDate])

    const guestLabel = useMemo(()=>{
        if(guestCount){
            return `${guestCount} guests`
        }

        return 'Add Guests'
    },[guestCount])


  return (
    <section onClick={searchModal.onOpen} className='border-[4px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-lg transition duration-150 cursor-pointer'>
        <article className='flex flex-row items-center justify-center'>
            <div className='text-sm font-semibold px-6'>
                {locationLabel}
            </div>
            <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                {durationLabel}
            </div>
            <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>

            <div className='hidden sm:block'>
                {guestLabel}
            </div>
            <div className='p-2 bg-blue-700 rounded-full text-white'>
            <SearchIcon/>
            </div>
            </div>
        </article>
    </section>
  )
}

export default Search