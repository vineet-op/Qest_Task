import React from 'react';

export function PricingToggle({ isYearly, onToggle }) {
    return (
        <div className="flex items-center gap-4 justify-center">
            <span className={`text-sm ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
                onClick={onToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isYearly ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </button>
            <div className="flex items-center gap-2">
                <span className={`text-sm ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Yearly</span>
                <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded">SAVE 25%</span>
            </div>
        </div>
    );
}