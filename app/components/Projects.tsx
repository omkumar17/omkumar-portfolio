import React from 'react'
import Iframe from './iframe';

interface ProjectsProps {
    title: string;
    desc: string;
    img: string;
    link: string;
    videolink: string;
    videoStatus: string;
}

const Projects: React.FC<ProjectsProps> = (props) => {
    return (<>

        <div id="projects" className="max-w-sm md:max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="">
                <div className="rounded-t-lg w-full  max-h-[250px]"  >{props.img}</div>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
                <div className="actions flex flex-row  justify-between items-center m-0 p-0">
                    <a
                        href={props.videoStatus !== 'disable' ? props.videolink : '#'}
                        onClick={(e) => {
                            if (props.videoStatus === 'disable') {
                                e.preventDefault(); 
                            }
                        }}
                        className={`${props.videoStatus === 'disable' ? 'cursor-not-allowed bg-black opacity-50' : ''} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00009e] rounded-lg border-2 border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00009e] dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                        aria-disabled={props.videoStatus === 'disable'}
                    >
                        Video Demo
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>


                    <a href={props.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 border-white text-white bg-[#00009e] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#00009e] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Github
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Projects