import React from 'react'
import FeatureCard from '../components/FeatureCard'
import calender from "../../../public/calendar-check-alt.png"

const Features = () => {
    return (
        <main className='h-[300%] w-screen bg-neutral-100'>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-medium text-5xl text-center pt-[60px]'>Why Rmax?</p>
                <p className='text-center text-md w-[1016px] h-[64px] pt-5 text-textsecondary'>Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stake holders.</p>
            </div>

            <div className='w-full flex justify-center items-center px-[219px] '>
                <div className='w-full h-[748px] mt-[74px] flex items-center justify-center text-center flex-wrap gap-8 bg-neutral-100 '>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                        <FeatureCard image={calender} height={"244px"} width={"315px"} heading={"Scheduling"} subheading={"Manage appointments, classes, and events, workshops with..."} link={"View Details"} />
                        <FeatureCard image={calender} height={"244px"} width={"315px"} heading={"Scheduling"} subheading={"Manage appointments, classes, and events, workshops with..."} link={"View Details"} />
                        <FeatureCard image={calender} height={"244px"} width={"315px"} heading={"Scheduling"} subheading={"Manage appointments, classes, and events, workshops with..."} link={"View Details"} />
                        <FeatureCard image={calender} height={"244px"} width={"315px"} heading={"Scheduling"} subheading={"Manage appointments, classes, and events, workshops with..."} link={"View Details"} />
                        <FeatureCard image={calender} height={"244px"} width={"315px"} heading={"Scheduling"} subheading={"Manage appointments, classes, and events, workshops with..."} link={"View Details"} />
                        <FeatureCard image={calender} height={"244px"} width={"315px"} heading={"Scheduling"} subheading={"Manage appointments, classes, and events, workshops with..."} link={"View Details"} />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Features