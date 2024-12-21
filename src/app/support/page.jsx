import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import ContactCard from '../components/ContactCard'
import { Footer } from '../pages/Footer'

const page = () => {
    return (
        <div className='min-h-screen bg-neutral-100 w-full'>
            <div className='flex justify-center items-center w-full pt-5'>
                <Navbar />
            </div>
            <ContactForm />
            <ContactCard />
            <Footer />
        </div>
    )
}

export default page