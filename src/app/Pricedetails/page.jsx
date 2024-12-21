import React from 'react'
import Navbar from '../components/Navbar'
import Faq from '../pages/Faq'
import { Footer } from '../pages/Footer'
import Table from '../components/Table'

const page = () => {
    return (
        <>
            <div className='w-screen h-screen bg-white'>
                <div className='flex items-center justify-center pt-5'>

                    <Navbar />

                </div>

                <Table />

                <Faq />

                <Footer />
            </div>
        </>
    )
}

export default page