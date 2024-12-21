import React from 'react';
// import { Apple, PlayStore } from 'lucide-react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function FooterColumn({ title, items }) {
    return (
        <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium mb-2">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} className="text-gray-400 hover:text-white transition-colors">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function AppDownloadSection() {
    const apps = [
        {
            icon: <FaApple />,
            text: 'Business App'
        },
        {
            icon: <IoLogoGooglePlaystore />
            , text: 'Business App'
        },
        { icon: <FaApple />, text: 'User App' },
        { icon: <IoLogoGooglePlaystore />, text: 'User App' },
    ];

    return (
        <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium mb-2">Download</h3>
            <div className="space-y-2">
                {apps.map((app, index) => (
                    <a
                        key={index}
                        href="#"
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="w-5 h-5 mr-2">{app.icon}</span>
                        <span>{app.text}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

function SocialLinks() {
    const socials = [
        { icon: <FaXTwitter />, label: 'Twitter' },
        {
            icon: <FaFacebook />
            , label: 'Facebook'
        },
        { icon: <FaInstagram />, label: 'Instagram' },
        {
            icon: <FaLinkedin />
            , label: 'LinkedIn'
        },
    ];

    return (
        <div className="flex space-x-4">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}

export function Footer() {
    const footerData = {
        company: {
            title: 'Company',
            items: [
                { text: 'About us', link: '#' },
                { text: 'Contact us', link: '#' },
                { text: 'Careers', link: '#' },
            ],
        },
        businessSize: {
            title: 'Business Size',
            items: [
                { text: 'Entrepreneurs', link: '#' },
                { text: 'SMBs', link: '#' },
                { text: 'Growth Business', link: '#' },
                { text: 'Household Services', link: '#' },
                { text: 'Enterprise', link: '#' },
            ],
        },
        businessType: {
            title: 'Business Type',
            items: [
                { text: 'Health & Wellness', link: '#' },
                { text: 'Sports', link: '#' },
                { text: 'Learning Activities', link: '#' },
                { text: 'Household Services', link: '#' },
                { text: 'Miscellaneous', link: '#' },
            ],
        },
        legal: {
            title: 'Legal',
            items: [
                { text: 'Privacy Policy', link: '#' },
                { text: 'Terms & Conditions', link: '#' },
                { text: 'Return Policy', link: '#' },
            ],
        },
        contact: {
            title: 'Contact us',
            items: [
                { text: 'support@rmax.com', link: 'mailto:support@rmax.com' },
                { text: '+91-8459671235', link: 'tel:+918459671235' },
            ],
        },
    };

    return (
        <footer className="bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    <FooterColumn {...footerData.company} />
                    <FooterColumn {...footerData.businessSize} />
                    <FooterColumn {...footerData.businessType} />
                    <FooterColumn {...footerData.legal} />
                    <FooterColumn {...footerData.contact} />
                    <AppDownloadSection />
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Copyright. All Rights Reserved @RMax
                    </p>
                    <div className="mt-4 sm:mt-0">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
}
