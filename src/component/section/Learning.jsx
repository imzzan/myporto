import React from "react";
import { Carousel } from "@mantine/carousel";
import { cer_css, cer_dibim1, cer_dibim2, cer_html, cer_jsdasar, cer_jsinter, cer_oracle1, cer_oracle2, ss } from "../../assets";

const Learning = () => {
  return (
    <div className=" bg-primary dark:bg-darkblue pb-10 w-full h-screen" id='achive'>
      <h1 className=" font-bold dark:text-white text-[20px] text-center pt-5 text-black">Achivment</h1>
      <div className=" w-4 h-4  bg-gradient-to-t from-[rgb(33,87,242)] to-[#A6BCFA] rounded-full mx-auto"></div>
      <Carousel
      withIndicators
      height={220}
      className=" my-5 w-full"
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
    >
      <Carousel.Slide><img src={cer_html} alt=""/></Carousel.Slide>
      <Carousel.Slide><img src={cer_css} alt=""/></Carousel.Slide>
      <Carousel.Slide><img src={cer_jsdasar} alt=""/></Carousel.Slide>
      <Carousel.Slide><img src={cer_jsinter} alt=""/></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>

    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
    >
      <Carousel.Slide><img src={cer_dibim1} alt=""/></Carousel.Slide>
      <Carousel.Slide><img src={cer_dibim2} alt=""/></Carousel.Slide>
      <Carousel.Slide><img src={cer_oracle1} alt=""/></Carousel.Slide>
      <Carousel.Slide><img src={cer_oracle2} alt=""/></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>    </div>
  );
};

export default Learning;
