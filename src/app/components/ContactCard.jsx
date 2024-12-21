import Image from 'next/image'
import React from 'react'
import info from "../../../public/Info.png"

const ContactCard = () => {
    return (
        <div className='w-full h-full object-fill'>
            <Image src={info} className='mx-auto' alt='contact-card' />
        </div>
    )
}

export default ContactCard