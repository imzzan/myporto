import React, { useState, useEffect } from "react";
import { BsList, BsX } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import { Link } from "react-scroll";
import {BsFillMoonStarsFill} from 'react-icons/bs';


import { logo,logowhite, moon } from "../../assets";
import { navlinks } from "../../constants";

const Navbar = ({darkTheme, setDarkTheme}) => {
  const [backgroundwhite, setBackgroundWhite] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "fixed w-full transition-all duration-700 z-10 py-4 px-[20px] xl:px-20",
        {
          "bg-white dark:bg-[#222222] shadow-lg !py-3": backgroundwhite,
        }
      )}
    >
      <div className="flex justify-between items-center">
        <img src={darkTheme ? logowhite : logo} alt="logo" className=" w-14" />
        <div className="flex items-center gap-2 md:gap-8">
          <div className="gap-8 items-center hidden lg:flex">
            {navlinks.map((item, i) => {
              return (
                <div className="">
                  <Link smooth spy to={item.id}>
                    <a href="" className="hover:text-primary dark:text-white">
                      {item.name}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <BsFillMoonStarsFill className=" text-2xl cursor-pointer text-black dark:text-yellow-500" onClick={() => setDarkTheme(!darkTheme)}/>
          <div className="lg:hidden">
            <button
              className="z-50 p-4 block transition-all"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {dropdownOpen ? (
                <BsX className=" text-[23px] dark:text-white" />
              ) : (
                <BsList className=" text-[23px] dark:text-white" />
              )}
            </button>

            {/* DropDown */}
            <div
              className={classNames({
                "text-base left-0 top-full right-0 absolute transition-all duration-400": true,
                "invisible opacity-0": !dropdownOpen,
                "visible opacity-100": dropdownOpen,
              })}
            >
              <div
                className="h-screen left-0 bg-black bg-opacity-30"
                onClick={handleBlackScreenClick}
              >
                <div className="z-20 shadow-xl bg-white dark:bg-[#222222] p-6">
                  <div className="">
                    {navlinks.map((item, i) => {
                      return (
                        <div className=" w-full">
                          <Link smooth spy to={item.id} onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <a href="" className="hover:text-primary block py-3 dark:text-white">
                              {item.name}
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
