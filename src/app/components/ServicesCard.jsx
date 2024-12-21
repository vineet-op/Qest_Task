import Image from 'next/image'
import React from 'react'


const ServicesCard = ({ image, heading, subheading }) => {
    return (
        <div className='w-[302px] h-[467px] rounded-md bg-neutral-100'>
            <Image src={image} alt='carousel1' className='w-[302px] h-[358px] object-fill' />
            <div className='w-full h-[91px] mt-[18px]'>
                <p className='font-bold text-2xl'>{heading}</p>
                <p className='mt-[10px] text-textsecondary'>{subheading}</p>
            </div>
        </div>
    )
}

export default ServicesCard