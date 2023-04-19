import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Apps,
  Contact,
  Footer,
  Hero,
  Learning,
  Navbar,
  Project,
  Services,
} from "./component";
import { wave, wavedark } from "./assets";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("DarkTheme") !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
    }
  }, []);

  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <div className="w-full">
      <div className="w-full relative">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Hero />
        <div className="flex -z-10 w-full">
          <div className=" bg-primary dark:bg-darkblue h-screen w-[50%] lg:w-[30%]"></div>
          <div className=" bg-white dark:bg-[#222222] h-screen w-[50%] lg:w-[70%]"></div>
        </div>
      </div>
      <Apps />
      <Project />
      <About />
      <Services />
      <Learning />
      <div className=" bg-white dark:bg-[#222222]">
        <Contact />
        <img src={darkTheme ? wavedark : wave} alt="" className=" w-full" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
