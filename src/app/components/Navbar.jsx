import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='w-[1065px] h-[60px] bg-white border border-gray-400 flex justify-between items-center rounded-md'>
            <div className='text-xl font-bold text-black pl-5'>
                R <span className='text-pink-950'>Max</span>
            </div>
            <div className='flex gap-4 justify-center items-center'>
                <a className='p-2' href="/home"> Home</a>
                <a className='p-2' href="/features">Features </a>
                <a className='p-2' href="/pricing">Pricing</a>
                <a className='p-2' href="/solution">Solution</a>
                <div className='flex gap-2'>
                    <Button backgroundColor={"bg-white"} height={"50px"} width={"5px"} textColor={"black"} text={"Login"} />
                    <Button backgroundColor={"bg-orange-600"} height={"50px"} width={"61px"} textColor={"white"} text={"Try For Free"} />
                </div>
            </div>
        </div>
    )
}

export default Navbar