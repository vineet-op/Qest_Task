"use client";

import React, { useState } from "react";

const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion((prev) => (prev === index ? null : index));
    };

    return (
        <div className="w-screen h-[811px] bg-neutral-100 flex justify-center items-center">
            <div className="w-[724px] h-[691px] pt-[60px]">
                <p className="text-center font-semibold text-5xl">Frequently Asked Questions</p>
                <p className="w-[700px] px-5 text-textsecondary font-medium text-center mt-8">
                    With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.
                </p>

                <div className="mt-10 bg-white rounded-2xl">
                    {[
                        {
                            question: "What is Flowbite?",
                            answer: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
                        },
                        {
                            question: "Is there a Figma file available?",
                            answer: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
                        },
                        {
                            question: "What are the differences between Flowbite and Tailwind UI?",
                            answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
                        },
                    ].map((item, index) => (
                        <div key={index}>
                            <h2>
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{item.question}</span>
                                    <svg
                                        className={`w-3 h-3 transform ${openAccordion === index ? "rotate-180" : ""
                                            }`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5L5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            {openAccordion === index && (
                                <div className="p-5 border border-t-0 border-gray-200">
                                    <p className="text-gray-500">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <p className="text-center mt-6">Haven’t got your answer? <span className="text-blue-600 underline"> <a href=""> Contact our support now</a></span></p>
            </div>
        </div>
    );
};

export default Faq;
