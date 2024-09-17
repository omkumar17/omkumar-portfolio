"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        const htmlElement = document.documentElement;
        if (isDarkMode) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        }
        setIsDarkMode(!isDarkMode);
    };


    const [activeSection, setActiveSection] = useState('');
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode === 'enabled') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }

        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            setActiveSection(hash || 'home');
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/resume-latest.pdf';
        link.setAttribute('download', 'resume-omkumar.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    interface handleSetActive {
        section: string;
    }

    const handleSetActive = (section: string) => {
        setActiveSection(section);
    };

    return (
        <nav className="bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 fixed w-full z-20 top-0 start-0 border-b-4 dark:border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-2">
                <a href="/img/signaturelogo.png" className="flex items-center  h-[45px]">
                    <img src="/img/signaturelogo.png" className="invert dark:invert-0 h-full" alt="om Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Om Kumar</span>
                </a>
                
                <div className="flex justify-center items-center gap-0 md:gap-6  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                    onClick={toggleDarkMode}
                    className=" bg-gray-800 text-white dark:bg-gray-200 border-2 dark:border-white border-black dark:text-black rounded-3xl"
                >
                    {isDarkMode ? <Image className="rounded-3xl" src="/img/darkmode.jpg" alt="" width={30} height={30}/>: <Image className="rounded-3xl invert" src="/img/lightmode.jpg" alt="" width={30} height={30}/>}
                </button>
                    <button type="button" onClick={handleDownload} className="absolute right-5 -bottom-11  sm:static  h-10 border-2 p-2 w-auto border-white rounded-md text-white bg-[#00009e] font-semibold hover:text-[#c3c3ff]">Resume</button>
                    <button data-collapse-toggle="navbar-sticky" onClick={() => setToggle(!toggle)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={toggle ? "true" : "false"}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden ${toggle ? 'max-h-[500px] opacity-100' : 'max-h-0 md:max-h-[100%] md:opacity-100'} `}
                    id="navbar-sticky"
                >
                    <ul
                        className={`flex flex-col font-bold p-4 md:p-0 mt-4  border border-gray-600 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 dark:bg-opacity-70 bg-opacity-70 md:dark:bg-gray-900 dark:border-gray-700`}
                    >
                        <li>
                            <a
                                href="#home"
                                onClick={() => handleSetActive('home')}
                                className={`block py-2 px-3 rounded md:p-0 ${activeSection === 'home'
                                    ? 'text-blue-700'
                                    : ' text-gray-900 dark:text-white md:bg-transparent md:text-gray-900  md:dark:text-white'
                                    }`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => handleSetActive('about')}
                                className={`block py-2 px-3 rounded md:p-0 ${activeSection === 'about'
                                    ? 'text-blue-700'
                                    : ' text-gray-900 dark:text-white md:bg-transparent md:text-gray-900  md:dark:text-white'
                                    }`}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                onClick={() => handleSetActive('skills')}
                                className={`block py-2 px-3 rounded md:p-0 ${activeSection === 'skills'
                                    ? 'text-blue-700'
                                    : ' text-gray-900 dark:text-white md:bg-transparent md:text-gray-900 md:dark:text-white'
                                    }`}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => handleSetActive('projects')}
                                className={`block py-2 px-3 rounded md:p-0 ${activeSection === 'projects'
                                    ? 'text-blue-700'
                                    : ' text-gray-900 dark:text-white md:bg-transparent md:text-gray-900 md:dark:text-white'
                                    }`}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contacts"
                                onClick={() => handleSetActive('contacts')}
                                className={`block py-2 px-3 rounded md:p-0 ${activeSection === 'contacts'
                                    ? 'text-blue-700'
                                    : ' text-gray-900 dark:text-white md:bg-transparent md:text-gray-900 md:dark:text-white'
                                    }`}
                            >
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
                


            </div>


        </nav>
    );
};

export default Navbar;
