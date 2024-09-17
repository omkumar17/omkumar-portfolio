import React from 'react';
import Image from 'next/image';
interface BorderProps {
    title: string;
    id:string;
    classname:string;
}

const Border: React.FC<BorderProps> = (props) => {
    return (
        <div id={props.id} className={`w-[100vw] skills flex flex-col justify-center items-center my-20 mb-8 pt-16 border-t-2 border-gray-700 dark:border-gray-200 ${props.classname}`}>
            <h1 className="text-4xl font-bold text-center m-0 p-0">{props.title}</h1>
            <div className="borderimg items-center m-0 p-0">
                <Image className="dark:invert" src="/img/borderText.jpg" alt="borderTextimage" width={300} height={100} />
            </div>
        </div>
    );
}

export default Border;
