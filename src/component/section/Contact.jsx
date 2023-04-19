import React, { useState } from "react";
import Swal from "sweetalert2";

import { Button1 } from "../atoms";
import { telephone, email, locationicon } from "../../assets";
import { contact } from "../../constants";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");

    if (name && email && message) {
      return Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Messege Success",
        showConfirmButton: false,
        timer: 1500,
      });
      
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="pt-5 md:pt-10 px-[35px] xl:px-20 dark:bg-[#222222] dark:text-white" id="contact">
      <h1 className=" font-bold text-[20px] text-center pt-5 text-black dark:text-white">
        Contact
      </h1>
      <div className=" w-4 h-4  bg-gradient-to-t from-[#2157F2] to-[#A6BCFA] rounded-full mx-auto"></div>

      <div className=" flex mb-10 rounded-xl flex-col dark:bg-[#2C2B2B] my-4 w-fit mx-auto p-5 lg:flex-row justify-center items-center gap-10">
        <form className=" mt-5 " onSubmit={handleSubmit}>
          <h1 className=" text-[22px] font-[500] mb-3 text-black dark:text-white">
            Get in touch
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 justify-between mb-3 md:mb-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className=" lg:w-[49%] p-1 w-full outline-none rounded-md pl-2 dark:bg-[#393838]"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className=" w-full lg:w-[49%] p-1 outline-none rounded-md pl-2 dark:bg-[#393838]"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message"
            className="outline-none rounded-md w-full h-[100px] lg:h-[150px] pl-2 mb-3 md:mb-4 dark:bg-[#393838]"
          ></textarea>
          <Button1 name="Send" />
        </form>
        <div className=" flex flex-col justify-center lg:gap-5 gap-2">
          {contact.map((item, i) => {
            return (
              <div className=" flex items-center gap-2 mb-4">
                <img src={item.image} alt="location" className=" w-[30px]" />
                <div>
                  <h1 className=" font-[500] text-[16px] leading-5">
                    {item.name}
                  </h1>
                  <p className=" text-sm text-[#8B8B8B]">{item.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
