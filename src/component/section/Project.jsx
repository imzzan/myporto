import React, { useState } from "react";
import { project } from "../../constants";
import { Button1 } from "./../atoms";

const Project = () => {
  const [hasil, setHasil] = useState(true);

  const seeMore = () => {
    setHasil(!hasil);
  };

  return (
    <div
      className=" py-5 dark:bg-[#222222] md:py-14 lg:py-16 px-[35px] xl:px-20"
      id="project"
    >
      <h1 className=" dark:text-white font-bold text-[20px] text-center text-black">
        Project
      </h1>
      <div className=" w-4 h-4  bg-gradient-to-t from-[#2157F2] to-[#A6BCFA] rounded-full mx-auto"></div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-5 justify-center gap-5 gap-y-10">
        {
          hasil ? project.filter((item, i) => i < 8).map((item ) => {
            return (
              <div
                  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  data-aos={item.aos}
                  data-aos-delay={item.delay}
                >
                  <img
                    src={item.image}
                    alt="image"
                    className=" h-[100px] md:h-[150px] w-full object-cover rounded-t-xl"
                  />
                  <div className="mt-1 p-3 flex flex-col justify-between gap-5">
                    <h1 className=" mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {item.name}
                    </h1>
                    <button
                      onClick={() => window.open(item.link)}
                      type="button"
                      class="inline-block rounded bg-primary dark:bg-darkblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      See Preview
                    </button>
                  </div>
                </div>
            )
          }) : project.map((item) => {
            return (
              <div
                  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  data-aos={item.aos}
                  data-aos-delay={item.delay}
                >
                  <img
                    src={item.image}
                    alt="image"
                    className=" h-[100px] md:h-[150px] w-full object-cover rounded-t-xl"
                  />
                  <div className="mt-1 p-3 flex flex-col justify-between gap-5">
                    <h1 className=" mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {item.name}
                    </h1>
                    <button
                      onClick={() => window.open(item.link)}
                      type="button"
                      class="inline-block rounded bg-primary dark:bg-darkblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      See Preview
                    </button>
                  </div>
                </div>
            )
          })
        }
      </div>
      <Button1
        name={hasil ? "See More " : "See Less"}
        onclick={seeMore}
        className="mt-10"
      />
    </div>
  );
};

export default Project;
