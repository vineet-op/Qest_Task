import React from 'react'

const Inputs = () => {
    return (
        <div className='w-[456px] h-[58] bg-white flex justify-around items-center gap-1 rounded-lg'>
            <div className='flex flex-col bg-white w-[71px] h-[59]'>
                <p className='font-bold ml-7'>AI</p>
                <p className='font-bold'>P<span className='text-pink-950'>MAX</span></p>
            </div>
            <div className='flex justify-center bg-white items-center text-center text-gray-500'>
                Curious? Let AI Uncover the Answers!
            </div>
        </div>
    )
}

export default Inputs