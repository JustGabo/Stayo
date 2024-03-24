import React from 'react'
import EmptyState from '@/components/EmptyState'
import ClientOnly from '@/components/ClientOnly'
import getCurrentUser from '@/app/actions/getCurrentUser'
import getReservation from '@/app/actions/getReservation'
import TripsClient from './TripsClient'

const TripsPage =  async () => {
  
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState title='Unauthorized' subtitle='Please Login' />
            </ClientOnly>
        )
    }

    const reservation = await getReservation({userId: currentUser.id})

    if(reservation.length === 0){
        return (
            <ClientOnly>
                <EmptyState title='No trips found' subtitle='Looks like you havent reserved any trips.' />
            </ClientOnly>
        )
    }

    return (
    <ClientOnly>
        <TripsClient reservations={reservation} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default TripsPage