import Image from 'next/image';
import React from 'react';


interface SkillsProps {
    name: string;
    img:string;
}

const Skills: React.FC<SkillsProps> = (props) => {
    return (
        <div id="skills" className="flex flex-col items-center pb-10">
            <Image className=" w-20 h-20 sm:w-24 sm:h-24 mb-3 rounded-full shadow-lg border-2 border-black dark:border-yellow-400" src={props.img} alt="Profile image " width={100} height={100} />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
        </div>
    );
}

export default Skills;
