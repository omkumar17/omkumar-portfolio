'use client'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import RightDesc from "./components/RightDesc";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Border from "./components/Border";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  

  return (
    <>
      <Navbar />
      <div id="home" className="container bg-white dark:bg-black w-[90vw] lg:w-[90vw] lg:relative mx-auto flex flex-col-reverse lg:flex-row justify-center xl:gap-36 items-center my-20 mb-10">
        <RightDesc />
        <MainSection />
      </div>
      <Border id="about" title="About Me" classname=""/>
      <AboutMe />
      <Border id="skills" title="My Skills" classname=""/>
      <h1 className="container text-3xl w-[90vw] mx-auto text-center m-5 ">Web Development skills</h1>
      <div className="container skillSection flex flex-row justify-center items-center flex-wrap gap-x-20 p-10 pt-0 lg:w-[80vw] mx-auto">
        <Skills name="HTML" img="/img/html.jpg" />
        <Skills name="CSS" img="/img/css.jpg" />
        <Skills name="JavaScript" img="/img/javascript.jpg" />
        <Skills name="PHP" img="/img/php.jpg" />
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
      <Border id="projects" title="my Projects" classname=""/>
      <div className="container w-[90vw] mx-auto flex flex-row justify-center items-center gap-20 flex-wrap ">
      <Projects title="Foot Fusion" img="" desc="An full stack ecommerce website that features footwear. Build using HTML, CSS ,JavaScript, PHP, SQL. " link="https://github.com/omkumar17/SDP_Project" videolink="" videoStatus="disable"/>
      <Projects title="Password Manager" img="" desc="A reactJS project that uses express.js and MongoBD to store password. Performs all CRUD operations" link="https://github.com/omkumar17/passMan_mongo" videolink="https://www.linkedin.com/posts/om-kumar17_mern-reactjs-tailwindcss-activity-7235672042820296704-7d6H?utm_source=share&utm_medium=member_desktop" videoStatus="enable"/>
      <Projects title="Weather - by Om" img="" desc="A simple HTML, CSS and JavaScript project that uses API integration to fetch weather from OpenWeather." link="https://github.com/omkumar17/weather-by-om" videolink="https://www.linkedin.com/posts/om-kumar17_weatherforecast-openweathermap-webdevelopment-activity-7219611095869575169-51yL?utm_source=share&utm_medium=member_desktop" videoStatus="enable"/>
      <Projects title="Task Manager" img="" desc="A reactJS project that manager the task . Uses all CRUD operations and basic task manager features." link="https://github.com/omkumar17/task_manager" videolink="https://www.linkedin.com/posts/om-kumar17_reactjs-tailwindcss-javascript-activity-7229877105314938881-vpxl?utm_source=share&utm_medium=member_desktop" videoStatus="enable"/>
      <Projects title="Digital Signature" img="" desc="A JavaScript project that allows user to download their digital signature in any color." link="https://github.com/omkumar17/digital-signature" videolink="https://www.linkedin.com/posts/om-kumar17_learninpublic-javascript-html-activity-7222846896577404928-9xPG?utm_source=share&utm_medium=member_desktop" videoStatus="enable"/>
      <Projects title="Digital Menu" img="" desc="A PHP project that uses SQL database to store order placed . User can make order digitally in resturants" link="https://github.com/omkumar17/digital_menu" videolink="" videoStatus="disable"/>
      <Projects title="Console ecomm" img="" desc="A simple java based console program that allows user and admin to order and manage products respectively." link="https://github.com/omkumar17/console-ecomm" videolink="" videoStatus="disable"/>
      
      </div>
      <Border id="contacts" title="Contact Me" classname=""/>
      <Contact/>
      
      <Footer/>
      
    </>
  );
}
