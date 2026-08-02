'use client'

import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import RightDesc from "./components/RightDesc";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Border from "./components/Border";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from 'next/head';
import { useEffect, useState } from "react";
import Loading from "./loading";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" className="invert dark:invert" type="image/ico" />
        <meta name="keywords" content="om kumar , portfolio , om kumar portfolio , about om kumar " />
        <meta name="author" content="Om Kumar" />
        <link rel="canonical" href="https://omkumar-portfolio.vercel.app" />
        <title>PortFolio - Om Kumar</title>
      </Head>
      {isLoading ? <Loading /> :
        <>
          <Navbar />
          <div id="home" className="container  w-[90vw] lg:w-[90vw] lg:relative mx-auto flex flex-col-reverse lg:flex-row justify-center xl:gap-36 items-center my-20 mb-10">
            <RightDesc />
            <MainSection />
          </div>
          <Border id="about" title="About Me" classname="" />
          <AboutMe />
          <Border id="skills" title="My Skills" classname="" />
          <h1 className="container text-3xl w-[90vw] mx-auto text-center m-5 ">Web Development skills</h1>
          <div className="container skillSection flex flex-row justify-center items-center flex-wrap gap-x-20 p-10 pt-0 lg:w-[80vw] mx-auto">
            <Skills name="HTML" img="/img/html.jpg" />
            <Skills name="CSS" img="/img/css.jpg" />
            <Skills name="JavaScript" img="/img/javascript.jpg" />
            <Skills name="PHP" img="/img/php.jpg" />
            <Skills name="TailwindCss" img="/img/tailwind.jpg" />
            <Skills name="ReactJs" img="/img/reactjs.jpg" />
            <Skills name="NodeJS" img="/img/node.jpg" />
            <Skills name="Express.js" img="/img/express.jpg" />
            <Skills name="Next.js" img="/img/next.jpg" />
            <Skills name="SQL" img="/img/sql.jpg" />
            <Skills name="MongoDB" img="/img/mongo.jpg" />


          </div>
          <h1 className="container text-3xl w-[90vw] mx-auto text-center m-5 ">Programming skills</h1>
          <div className="container skillSection flex flex-row flex-wrap justify-center items-center gap-x-20 p-10 pt-0 lg:w-[80vw] mx-auto mb-10">
            <Skills name="C" img="/img/c.jpg" />
            <Skills name="C++" img="/img/cpp.jpg" />
            <Skills name="Java" img="/img/java.jpg" />
            <Skills name="Python" img="/img/python.jpg" />
          </div>
          <Border id="projects" title="My Projects" classname="" />
          <div className="container w-[90vw] mx-auto flex flex-row justify-center items-center gap-20 flex-wrap ">
            <Projects
              title="Foot Fusion"
              img=""
              desc="A full-stack e-commerce website for footwear built with HTML, CSS, JavaScript, PHP, and SQL."
              link="https://github.com/omkumar17/SDP_Project"
              livelink=""
              videolink=""

            />

            <Projects
              title="Metly - Meet People Who Matters"
              img=""
              desc="A full-stack MERN dating platform with smart matching and real-time chat."
              link="https://github.com/omkumar17/mates"
              livelink="https://metlyconnect.vercel.app"
              videolink=""

            />

            <Projects
              title="QR Attendance Management System"
              img=""
              desc="A full-stack MERN attendance management system prototype and idea with QR-based check-ins and real-time attendance tracking."
              link=""
              livelink=""
              videolink="https://www.linkedin.com/posts/om-kumar17_softwaredevelopment-edtech-productivity-activity-7247206613386711040-iY12?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3e5h8BfinJLFMLUhDRgSgElAXfSpJytYo"

            />

            <Projects
              title="Password Manager"
              img=""
              desc="A React.js password manager using Express.js and MongoDB with complete CRUD functionality."
              link="https://github.com/omkumar17/passMan_mongo"
              livelink=""
              videolink="https://www.linkedin.com/posts/om-kumar17_mern-reactjs-tailwindcss-activity-7235672042820296704-7d6H?utm_source=share&utm_medium=member_desktop"

            />

            <Projects
              title="Weather - by Om"
              img=""
              desc="A weather application built with HTML, CSS, and JavaScript using the OpenWeather API."
              link="https://github.com/omkumar17/weather-by-om"
              livelink=""
              videolink="https://www.linkedin.com/posts/om-kumar17_weatherforecast-openweathermap-webdevelopment-activity-7219611095869575169-51yL?utm_source=share&utm_medium=member_desktop"

            />

            <Projects
              title="Task Manager"
              img=""
              desc="A React.js task manager with CRUD operations and task management features."
              link="https://github.com/omkumar17/task_manager"
              livelink=""
              videolink="https://www.linkedin.com/posts/om-kumar17_reactjs-tailwindcss-javascript-activity-7229877105314938881-vpxl?utm_source=share&utm_medium=member_desktop"

            />

            <Projects
              title="Digital Signature"
              img=""
              desc="A JavaScript application for creating and downloading digital signatures in custom colors."
              link="https://github.com/omkumar17/digital-signature"
              livelink=""
              videolink="https://www.linkedin.com/posts/om-kumar17_learninpublic-javascript-html-activity-7222846896577404928-9xPG?utm_source=share&utm_medium=member_desktop"

            />

            <Projects
              title="Digital Menu"
              img=""
              desc="A PHP-based restaurant ordering system with SQL database integration."
              link="https://github.com/omkumar17/digital_menu"
              livelink=""
              videolink=""
            />

            <Projects
              title="Console ecomm"
              img=""
              desc="A Java console-based e-commerce application for product and order management."
              link="https://github.com/omkumar17/console-ecomm"
              livelink=""
              videolink=""

            />
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-white">Other Mini Projects</h2>

              <p className="mt-4 max-w-4xl mx-auto text-gray-400 leading-7">
                Alongside my major projects, I've built several mini applications to
                strengthen my problem-solving and full-stack development skills. These
                include a <span className="font-semibold dark:text-white text-black">Assignment Submission Platform</span>,
                <span className="font-semibold dark:text-white text-black"> Medi Mind</span>,
                <span className="font-semibold dark:text-white text-black"> Predictive Analysis Project</span>,
                <span className="font-semibold dark:text-white text-black"> Web Chats</span>,
                <span className="font-semibold dark:text-white text-black"> Bus Management</span>,
                <span className="font-semibold dark:text-white text-black"> Personal Finanace Management</span>,
                <span className="font-semibold dark:text-white text-black"> Cryptotracker</span>,
                and various JavaScript, React, PHP, and Java applications covering API
                integration, CRUD operations, authentication, database management, and
                responsive UI development. More projects, demos, and source code are
                available on my GitHub and LinkedIn profiles.
              </p>

              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="https://github.com/omkumar17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/om-kumar17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <Border id="contacts" title="Contact Me" classname="" />
          <Contact />

          <Footer />
        </>
      }
    </>
  );
}
