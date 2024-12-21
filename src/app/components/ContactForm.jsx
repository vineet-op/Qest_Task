import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-red-500">RMax</span>
                <span className="text-gray-400 text-sm">Curious? Let AI Discover the Answers!</span>
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-4xl font-bold mb-2 text-start">Get in touch with us.</h1>
            <h2 className="text-4xl font-bold mb-8 text-start">We're here to assist you.</h2>

            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm mb-1">Business Name*</label>
                        <input
                            type="text"
                            placeholder="Search for your business listing"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Your Name*</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm mb-1">Phone Number*</label>
                        <div className="flex">
                            <select className="px-2 py-2 border rounded-l-lg border-r-0">
                                <option>+91</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="9851"
                                className="w-full px-4 py-2 border rounded-r-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="e.g xyz@gmail.com"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm mb-1">Message*</label>
                    <textarea
                        placeholder="Write here your message..."
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    ></textarea>
                </div>

                <button className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 mx-auto">
                    <span>Leave us a Message</span>
                    <Send className="w-4 h-4" />
                </button>
            </form>
        </div>
    </div>
)

export default ContactForm;