import React from "react";
import { Link } from "react-scroll";

import { apps } from "../../constants";
import { plus, ellipse, profile } from "../../assets";
import { Button1, Button2 } from "../atoms";

const Hero = () => {
  const downloadCv = () => {
    window.open(
      "https://drive.google.com/file/d/1XX6KYdivijPSRbdmCwz6ouuFzAcY3lBC/view?usp=share_link",
      "_blank"
    );
  };

  return (
    <div className=" w-full absolute p-9 xl:px-20" id="home">
      <img src={plus} alt="plus" className=" absolute top-[60px] right-8" />
      <img src={ellipse} alt="ellipse" className=" absolute top-[300px]" />
      <img
        src={ellipse}
        alt="ellipse"
        className=" absolute bottom-36 right-24 hidden lg:block"
      />
      <img
        src={plus}
        alt="plus"
        className=" absolute top-[200px] left-[30%] hidden lg:block"
      />
      <div className=" w-full h-fit cardprofile mt-8 sm:mt-20 md:mt-16 border border-blue pt-5 px-5 md:px-20 pb-6">
        <img
          src={profile}
          alt="profile"
          className=" block mx-auto w-40 lg:w-44 rounded-full"
        />
        <h1 className=" dark:text-white font-bold text-3xl md:text-4xl lg:text-4xl text-black mt-1 lg:text-center">
          I’m <span className=" text-blue dark:text-darkblue">Muhamad</span>{" "}
          Muzani
        </h1>
        <p className=" dark:text-white text-[16px] lg:text-lg text-black mt-2 lg:text-center">
          Junior Frontend Developer with over two years of experience. Skilled
          and experienced in designing, developing, and testing website using
          up-to-date technologies. Have professionally used HTML, CSS &
          Javascript especially ReactJs & NextJs.
        </p>
        <div className="flex justify-center items-center mt-5 gap-5">
          <Link smooth spy to="project">
            <Button1 name="See Project" className=" hidden md:block" />
          </Link>
          <Button2 name="Download Resumes" onclick={downloadCv} />
        </div>
      </div>
      <div className="justify-end gap-4 mt-5 hidden xl:flex">
        {apps.map((item, i) => {
          return (
            <div className=" bg-primary dark:bg-darkblue cardapps w-[200px] mt-5">
              <img
                src={item.image}
                alt="image"
                className=" w-[50px] mx-auto -mt-5 rounded-full bg-white dark:bg-[#222222] p-1"
              />
              <p className="my-3 text-center font-bold text-white lg:text-lg">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
