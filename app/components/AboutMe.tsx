import React from 'react'
import Image from 'next/image';
import Border from './Border';

const AboutMe = () => {
    return (
        <>
            <div className="container AboutText flex flex-col lg:flex-row justify-center items-center  w-[100vw] lg:w-[90vw] mx-auto h-auto mb-40">
                <div className="leftabout p-5 md:pr-10 lg:max-w-[50%] lg:border-r-2 h-[90%] flex flex-col justify-center items-center gap-10 ">
                    <p style={{ color: 'var(--foreground)' }} className='text-white container  mx-auto text-center text-lg  flex justify-center items-center'>
                        As a software developer, I love working on both front-end and back-end projects. I thrive on solving problems and enjoy collaborating with teams to create better solutions. I’m always looking for ways to improve my skills and contribute new ideas.
                    </p>
                    <div className="sociallinks mx-10 ">
                        <ul className='flex flex-row gap-5 justify-center items-center flex-wrap'>
                            <li className='my-5 text-lg  border-2 border-blue-700 dark:border-white px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white font-bold cursor-pointer flex flex-row items-center justify-center gap-2 w-32'><Image className='' src="/img/linkedin.png" alt="linkedinimg" width={20} height={20} /><a href="https://www.linkedin.com/in/om-kumar17">LinkedIN </a></li>
                            <li className='my-5 text-lg  border-2 border-blue-700 dark:border-white px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white font-bold cursor-pointer flex flex-row items-center justify-center gap-2 w-32'><Image className='dark:invert' src="/img/github.png" alt="githubimg" width={40} height={40} /><a href="https://github.com/omkumar17">Github </a></li>
                            <li className='my-5 text-lg  border-2 border-blue-700 dark:border-white px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white font-bold cursor-pointer flex flex-row items-center justify-center gap-2 w-32'><Image className='' src="/img/gmail.png" alt="gmailimg" width={25} height={25} /><a href="mailto:omkumar1870@gmail.com">Mail </a></li>

                        </ul>
                    </div>
                </div>
                <div className="details lg:w-[50%] h-[100%] relative">
                    <div id="fullWidthTabContent" className="">
                        <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-black" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                            <Border title="Education" id="education" classname="lg:hidden"/>
                            <h1 className='text-5xl text-center opacity-50  lg:absolute lg:top-[40%] xl:left-[32%] hidden lg:flex lg:left-[27%] lg:-rotate-90 lg:opacity-40 my-10 '>Education</h1>
                            <dl className="container grid max-w-screen-xl font-bold grid-cols-1 gap-10 p-4 mx-auto text-gray-900 sm:grid-cols-2 xl:grid-cols-2 dark:text-white sm:p-8">
                                <div className="flex flex-col  justify-center">
                                    <a href="https://arkajainuniversity.ac.in/about/" target="_blank"><dt className="mb-2 text-xl font-extrabold text-[#4c84ff] ">Arka Jain University , JSR</dt></a>
                                    <dd className="text-gray-500 dark:text-gray-400">Masters in Computer Application (2024-2026)</dd>
                                    {/* <dd className="text-gray-500 dark:text-gray-400"></dd> */}
                                </div>
                                <div className="flex flex-col  justify-center">
                                    <a href="https://sxca.edu.in/about-us/" target="_blank"><dt className="mb-2 text-xl font-extrabold text-[#4c84ff] ">St Xavier’s College , Ahmedabad</dt></a>
                                    <dd className="text-gray-500 dark:text-gray-400">Bachelors In Computer application (2021-2024)</dd>
                                    <dd className="text-gray-500 dark:text-gray-400">Percentage:76.37%</dd>
                                </div>
                                <div className="flex flex-col  justify-center">
                                    <a href="https://mnpsjsr.org/about-us/" target="_blank"><dt className="mb-2 text-xl font-extrabold text-[#4c84ff] ">Motilal Nehru Public School, JSR</dt></a>
                                    <dd className="text-gray-500 dark:text-gray-400">Intermediate (ISC) (2020-2021)</dd>
                                    <dd className="text-gray-500 dark:text-gray-400">Percentage: 84.50% </dd>
                                </div>
                                <div className="flex flex-col  justify-center">
                                    <a href="https://mnpsjsr.org/about-us/" target="_blank"><dt className="mb-2 text-xl font-extrabold text-[#4c84ff] ">Motilal Nehru Public School, JSR</dt></a>
                                    <dd className="text-gray-500 dark:text-gray-400">Matriculation (ICSE) (2018-2019)</dd>
                                    <dd className="text-gray-500 dark:text-gray-400">Percentage: 92.20%</dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
