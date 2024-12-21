import Image from 'next/image'
import React from 'react'
import apple from "../../../public/Logo1.png"
import playstore from "../../../public/Logo2.png"

const Download = () => {
    return (
        <div className='w-screen h-[390px] bg-neutral-100 overflow-hidden pt-5'>
            <div className='flex flex-col items-center justify-center text-center'>
                <p className='font-semibold text-5xl'>Manage Your Business On the Go</p>
                <p className='text-textsecondary text-base px-5 pt-[30px] w-[700px] h-[64px]'>With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.</p>
            </div>

            <div className='w-full h-[75px] flex gap-6 mt-20 justify-center items-center text-center'>
                <div className='w-[430px] h-[75px] text-center items-center justify-center flex gap-5'>
                    <button className=' h-full w-36 flex justify-center items-center gap-1 rounded-lg border border-gray-500 bg-white'>
                        <Image src={apple} alt='applestore' className='w-[30px] h-[30px]' />
                        App Store
                    </button>

                    <button className=' h-full w-36 flex justify-center items-center gap-1 rounded-lg border border-gray-500 bg-white'>
                        <Image src={playstore} alt='playstore' className='w-[30px] h-[30px]' />
                        Google Play
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Download