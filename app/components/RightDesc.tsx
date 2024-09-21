"use client";

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const RightDesc: React.FC = () => {

  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {

    const typed = new Typed(typedElement.current!, {
      strings: ['WEB DEVELOPING.', 'SOFTWARE DEVELOPING.'],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <div className="lg:w-[60%]  text-gray-900  dark:text-white">
      <div className="bg-[#296cfe] text-white text-sm font-semibold py-1 px-2 rounded relative inline-block mb-4">
        <span>Hello</span>
        <div className="absolute bottom-[-10px] left-1 w-0 h-0 border-t-0 border-l-[10px] border-b-[10px] border-l-[#3374ff] border-transparent"></div>
      </div>

      <h1 className="text-4xl mb-4  text-gray-900 dark:text-white">
        I&apos;M <span className="text-[#0033ff] dark:text-[#69dbfb] font-bold">OM KUMAR</span>
      </h1>
      <h1 className="text-4xl mb-4 text-wrap min-h-[100px] sm:min-h-[auto]  text-gray-900 dark:text-white">
        I DO <span id="title" ref={typedElement}></span>
      </h1>

      <h3 className="text-lg mb-4  text-gray-900   dark:text-white dark:bg-opacity-40  dark:border-gray-700">
        I&apos;m a passionate software developer with a solid foundation in web and backend development. I excel in problem-solving and teamwork, always eager to learn and innovate.
      </h3>

      <div className="flex space-x-4 mt-4">
        <a href="#projects" className="inline-block">
          <button className="h-10 w-28 border-2 border-white rounded-md text-white bg-[#00009e] font-semibold hover:text-[#c3c3ff]">Portfolio</button>
        </a>
        <a href="/pdf/resume-latest.pdf" target="_blank" className="inline-block">
          <button className="h-10 w-28 border-2 border-white rounded-md text-white bg-[#00009e] font-semibold hover:text-[#c3c3ff]">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default RightDesc;
