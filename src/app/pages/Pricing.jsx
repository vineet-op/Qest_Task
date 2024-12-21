"use client"

import React, { useState } from 'react';
import { PricingToggle } from '../components/PricingToggle';
import { PricingCard } from "../components/PricingCard"


const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const starterFeatures = [
        { text: 'Commercial License', included: true },
        { text: '100+ HTML UI Elements', included: true },
        { text: 'Unlimited Domain Support', included: true },
        { text: '6 Month Premium Support', included: false },
        { text: 'Life Time Updates', included: false },
    ];

    const premiumFeatures = [
        { text: 'Commercial License', included: true },
        { text: '100+ HTML UI Elements', included: true },
        { text: 'Unlimited Domain Support', included: true },
        { text: '6 Month Premium Support', included: true },
        { text: 'Life Time Updates', included: true },
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Choose Plan
                        </h2>
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">
                            That's Right For You
                        </h3>
                        <p className="mt-4 text-lg text-gray-600">
                            Simple and transparent pricing. Start for free, upgrade when you love it.
                        </p>
                        <div className="mt-2">
                            <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-500">
                                30 day free trial in a button
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-base text-gray-600">
                            Running a{' '}
                            <span className="font-medium text-gray-900">Growth Business</span> or{' '}
                            <span className="font-medium text-gray-900">Enterprise</span>? Let's connect -{' '}
                            <button className="text-white bg-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors">
                                Talk to Sales
                            </button>
                        </p>
                    </div>

                    <div className="mt-8">
                        <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
                    </div>

                    <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                        <PricingCard
                            title="Starter"
                            price={isYearly ? 17 * 9 : 17}
                            period={isYearly ? 'year' : 'month'}
                            features={starterFeatures}
                            ctaText="Get Started"
                        />
                        <PricingCard
                            title="Premium"
                            price={isYearly ? 88 * 9 : 88}
                            period={isYearly ? 'year' : 'month'}
                            features={premiumFeatures}
                            ctaText="Get Started"
                            popular
                        />
                    </div>

                    <div className="mt-8 text-center">
                        <button className="text-indigo-600 hover:text-indigo-500 font-medium">
                            Explore In-Depth Differences
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing