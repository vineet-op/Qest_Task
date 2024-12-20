import React from 'react'
import Image from 'next/image'

const FeatureCard = ({ height, width, heading, subheading, image, link }) => {
    return (
        <div style={{ width, height }} className="bg-fcardbg rounded-md shadow-md">
            <div className="w-10 h-10 flex justify-center items-center mx-auto pt-[24px]">
                <Image src={image} alt={heading} className="rounded-t-md" />
            </div>
            <div className="p-4 flex flex-col justify-center items-center text-center m-10">
                <h3 className="text-lg font-bold mb-2">{heading}</h3>
                <p className="text-sm text-textsecondary">{subheading}</p>
                <a href={link} className="text-purple-400 mt-2 inline-block" aria-label={`Learn more about ${heading}`}>
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default FeatureCard
