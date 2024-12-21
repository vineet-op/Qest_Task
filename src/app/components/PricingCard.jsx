import React from 'react';
import { Check, X } from 'lucide-react';

export function PricingCard({ title, price, period, features, ctaText, popular }) {
    return (
        <div className={`rounded-2xl p-5 ${popular ? 'bg-white shadow-xl' : 'bg-white'} flex flex-col h-[567px] w-[327px]`}>
            <div className="mb-8">
                <h3 className="text-lg font-medium uppercase tracking-wide text-red-500">{title}</h3>
                <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">$</span>
                    <span className="text-6xl font-bold tracking-tight">{price}</span>
                    <span className="ml-1 text-xl text-gray-500">/{period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">billed {period}ly</p>
            </div>

            <ul className="space-y-4 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {feature.included ? (
                            <Check className="h-5 w-5 text-green-500" />
                        ) : (
                            <X className="h-5 w-5 text-gray-300" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <button className="mt-8 w-full rounded-lg bg-red-50 px-6 py-3 text-center text-sm font-medium text-red-500 hover:bg-red-100 transition-colors">
                {ctaText}
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">No credit card required</p>
        </div>
    );
}