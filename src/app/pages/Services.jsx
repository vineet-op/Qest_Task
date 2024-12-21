import React from 'react'
import ServicesCard from '../components/ServicesCard'
import C1 from "../../../public/C1.png"
import C2 from "../../../public/health.jpg"
import C3 from "../../../public/learn.jpg"


const Services = () => {
    return (
        <div className='w-screen h-screen bg-neutral-100 pt-[20px]'>
            <div className='w-full h-[112px] flex flex-col justify-center items-center text-center'>
                <p className='font-bold text-5xl w-[564px] text-center'>Empowering Service Providers Across Industries</p>
                <p className='w-[778px] pt-5 text-textsecondary'>Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.</p>
            </div>

            <div className='w-[1254px] h-[467px] mt-[78px] mx-auto bg-neutral-100 flex gap-10 justify-around items-center'>
                <ServicesCard image={C1} heading={"Sports"} subheading={"From fitness studios to sports academies, Rmax empowers sports businesses."} />
                <ServicesCard image={C2} heading={"Healthcare & Wellness"} subheading={"Health and wellness service providers—from yoga instructors and gyms."} />
                <ServicesCard image={C3} heading={"Learning Activites"} subheading={"Tutors, educators, and learning centers—from music schools to art studios."} />
            </div>
        </div>
    )
}

export default Services