import React from "react";

interface ProjectsProps {
    title: string;
    desc: string;
    img: string;
    link: string;
    livelink: string;
    videolink: string;
}

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        
        <div
            id="projects"
            className="max-w-sm md:max-w-xs border border-gray-200 rounded-lg shadow dark:border-gray-700"
        >
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.title}
                </h5>

                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                    {props.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                    {/* Live Demo */}
                    <a
                        href={props.livelink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            if (!props.livelink) e.preventDefault();
                        }}
                        className={`flex-1 inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white rounded-lg border-2 border-white transition ${!props.livelink
                                ? "cursor-not-allowed bg-gray-600 opacity-50"
                                : "bg-green-700 hover:bg-green-800"
                            }`}
                        aria-disabled={!props.livelink}
                    >
                        Live Demo
                    </a>

                    {/* Video Demo */}
                    <a
                        href={props.videolink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            if (!props.videolink) e.preventDefault();
                        }}
                        className={`flex-1 inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white rounded-lg border-2 border-white transition ${!props.videolink
                                ? "cursor-not-allowed bg-gray-600 opacity-50"
                                : "bg-blue-700 hover:bg-blue-800"
                            }`}
                        aria-disabled={!props.videolink}
                    >
                        Video Demo
                    </a>

                    {/* GitHub */}
                    <a
                        href={props.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            if (!props.link) e.preventDefault();
                        }}
                        className={`flex-1 inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white rounded-lg border-2 border-white transition ${!props.link
                                ? "cursor-not-allowed bg-gray-600 opacity-50"
                                : "bg-black hover:bg-gray-900"
                            }`}
                        aria-disabled={!props.link}
                    >
                        GitHub
                    </a>
                </div>
            </div>
            
        </div>
        
    );
};

export default Projects;