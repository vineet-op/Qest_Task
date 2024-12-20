import React from 'react'
import AboutCard from '../components/AboutCard'
import user from "../../../public/user.png"
import download from "../../../public/download.png"
import airplay from "../../../public/airplay.png"

const About = () => {
    return (
        <main className='h-screen w-screen bg-neutral-100'>
            <div className='flex justify-center flex-col items-center w-full '>
                <p className='font-bold text-6xl mt-[60px] '>Onboard business in 3 simple steps</p>
                <p className='mt-[20px]'>Quick assisted onboarding with 30day free trial. No credit card needed.</p>
            </div>


            {/* //Todo    make it resposive*/}
            <div className='flex justify-evenly items-center mt-24 '>
                <AboutCard rank={1} image={user} heading={"Claim your preset profile"} subheading={"Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today."} />
                <AboutCard rank={2} image={download} heading={"Add services"} subheading={"Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates."} />
                <AboutCard rank={3} image={airplay} heading={"Built Website"} subheading={"Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient  Client experience."} />
            </div>

        </main>

    )
}

export default About