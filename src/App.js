import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particle from "./components/Particle";

import './App.css';

import ReactTypingEffect from "react-typing-effect";
import { useEffect, useState } from "react";

const Menu = (props) => {
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div {...props}>
      <div onClick={() => handleClick("home")} className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">HOME</div>
      <div onClick={() => handleClick("aboutme")} className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">ABOUT ME</div>
      <div onClick={() => handleClick("projects")} className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">PROJECTS</div>
      <div onClick={() => handleClick("certifications")} className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">CERTIFICATIONS</div>
      <div onClick={() => handleClick("contact")} className="px-1 py-4 cursor-pointer relative after:h-1 after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0 after:content-[''] after:rounded-full hover:after:w-full after:transition-all after:duration-300">CONTACTS</div>
    </div>
  )
}

function App() {
  const skills = [
    {
      title: "Languages", items: [
        { src: "/icons/c++.png" },
        { src: "/icons/csharp.png" },
        { src: "/icons/html.png" },
        { src: "/icons/css.png" },
        { src: "/icons/php.png" },
        { src: "/icons/nodejs.png" },
        { src: "/icons/python.png" },
        { src: "/icons/blockchain.png" },
      ]
    },
    {
      title: "Frameworks", items: [
        { src: "/icons/bootstrap.png" },
        { src: "/icons/sass.png" },
        { src: "/icons/tailwindcss.png" },
        { src: "/icons/laravel.png" },
        { src: "/icons/wordpress.png" },
        { src: "/icons/angularjs.png" },
        { src: "/icons/reactjs.png" },
        { src: "/icons/vuejs.png" },
        { src: "/icons/django.png" },
        { src: "/icons/bitcoin.png" },
        { src: "/icons/rust.png" },
        { src: "/icons/solidity.png" },
        { src: "/icons/solana.png" },
        { src: "/icons/aws.png" },
        { src: "/icons/google-cloud.png" },
      ]
    },
    {
      title: "Tools", items: [
        { src: "/icons/visual-studio.png" },
        { src: "/icons/visual-studio-code.png" },
        { src: "/icons/pycharm.png" },
      ]
    },
    {
      title: "Databases", items: [
        { src: "/icons/mysql.png" },
        { src: "/icons/mongodb.png" },
      ]
    },
    {
      title: "Version Control", items: [
        { src: "/icons/git.png" },
        { src: "/icons/github.png" },
        { src: "/icons/code-fork.png" },
      ]
    },
    {
      title: "Operating Systems", items: [
        { src: "/icons/windows.png" },
        { src: "/icons/linux.png" },
      ]
    }
  ];

  const careers = [
    { title: "Chiba Institute of Technology", content: "I graduated from the Department of Computer Science at the Faculty of Information and Computer Science in September 2022." },
  ];

  const projects = [
    { name: "Drug concentration simulation", link: "https://anesup.com", image: "/projects/anesup.png", content: "" }
  ];

  const [open, setOpen] = useState(false);
  const handleResize = () => setOpen(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="text-[#FFFC]" >
      <Particle />
      <div className="fixed w-full h-24 backdrop-blur z-40 px-6 py-4 flex items-center justify-end shadow gap-7">
        <input type="checkbox" id="hamburger" className="hidden" value={open} onChange={(e) => setOpen(e.target.checked)} />
        <label htmlFor="hamburger" >
          <div className="md:hidden">
            {
              open ? (
                <svg id="close" key={1} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <line x1="2" y1="2" x2="16" y2="16" stroke="#FFF8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="2" y1="16" x2="16" y2="2" stroke="#FFF8" strokeWidth="3" strokeLinecap="round" />
                </svg>
              ) : (
                <svg id="open" key={2} xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                  <line x1="2" y1="2" x2="22" y2="2" stroke="#FFF8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="2" y1="9" x2="22" y2="9" stroke="#FFF8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="2" y1="16" x2="22" y2="16" stroke="#FFF8" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )
            }
          </div>
        </label>
        <Menu className="hidden md:flex md:gap-8" />
      </div>
      <Menu className={open ? "fixed right-4 top-16 z-50 block p-8 backdrop-blur bg-[#FFF1] border-[#FFF2] border-2 rounded shadow" : "hidden"} />
      <div className="absolute w-full top-0 left-0">
        <div id="home" className="flex flex-wrap mt-32">
          <div className="w-full lg:w-1/2 text-center flex justify-center pt-48">
            <div>
              <h1 className="text-6xl">Kyosuke Yamada</h1>
              <ReactTypingEffect
                className="text-2xl"
                text={['Software engineer', 'Backend developer']}
                speed={50}
                eraseDelay={1000}
              />
              <div className="mt-16 flex justify-center">
                <button className="shadow px-16 py-3 rounded-full bg-gradient-to-b from-[#0000] to-[#0001] border-t border-t-[#FFF2] border-b border-b-[#0002] backdrop-blur">
                  RESUME
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex px-8 lg:px-16 xl:px-32 mt-32">
            <div className="w-full p-8 lg:p-16 rounded-xl shadow shadow-[#0004] relative flex justify-center backdrop-blur text-xl">
              I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
            </div>
          </div>
        </div>
        <div id="aboutme" className="flex flex-wrap p-8 lg:p-16 xl:p-32 items-start">
          <div className="w-full lg:w-1/2 lg:pr-4">
            {
              skills.map((skill, i) => (
                <div key={i}>
                  <h2 className="my-6 text-center text-2xl">{skill.title}</h2>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {
                      skill.items.map((item, j) => (
                        <div key={j} className="w-16 h-16 p-2 rounded-full backdrop-blur-sm bg-gradient-to-b from-[#FFF2] to-[#FFF1] border border-[#FFF2]">
                          <img src={item.src} />
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full lg:w-1/2 lg:pl-4 relative flex flex-wrap justify-center">
            <div className="absolute w-2 h-full rounded-full bg-gradient-to-r from-[#FFF4] to-[#FFF6] backdrop-blur shadow" />
            {
              careers.map((career, index) => (
                <div key={index} className="w-full flex">
                  {index % 2 == 1 ? <div className="w-1/2 p-2"> </div> : <></>}
                  <div className="w-1/2 p-2">
                    <div className="border-2 border-[#FFF2] bg-[#FFF1] rounded p-4 backdrop-blur" >
                      <h2 className="text-xl">{career.title}</h2>
                      <p className="mt-4">{career.content}</p>
                    </div>
                  </div>
                  {index % 2 == 0 ? <div className="w-1/2 p-2"> </div> : <></>}
                </div>
              ))
            }
          </div>
        </div>
        <div id="projects" className="flex flex-wrap p-8 lg:p-32 justify-between">
          {
            projects.map((project, index) => (
              <a key={index} href={project.link} className="w-64 border-2 border-[#FFF2] bg-[#FFF1] rounded-xl p-4 backdrop-blur">
                <img src={project.image} className="rounded border-2 border-[#FFF4]" />
                <h2 className="text-xl mt-4">{project.name}</h2>
                <p>{project.content}</p>
              </a>
            ))
          }
        </div>
        <div id="certifications" className="flex">
        </div>
        <div id="contact" className="flex">
        </div>
      </div>
    </div >
  );
}

export default App;