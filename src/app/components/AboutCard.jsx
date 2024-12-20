import Image from 'next/image'
import React from 'react'

const AboutCard = ({ heading, subheading, image, rank }) => {
    return (
        <>
            <div className='w-80 h-[351px] bg-neutral-100 flex flex-col items-center rounded-md'>
                <div className='w-10 h-10 bg-neutral-200 p-2 text-center rounded-full absolute mr-40 '>
                    {rank}
                </div>
                <div className='w-[160px] h-[160px] rounded-full mt-2 bg-white'>
                    <div className='w-[80px] h-[80px] rounded-full bg-cardcirle bg-opacity-25 my-10 mx-auto flex items-center justify-center'>
                        <Image src={image} alt='personimage' className='text-cardcirle' />
                    </div>
                </div>

                <div className='w-full mt-[54px]  flex flex-col gap-6'>
                    <p className='font-bold text-center'>{heading}</p>
                    <p className='text-center text-base'>{subheading}</p>
                </div>

            </div>
        </>
    )
}

export default AboutCard