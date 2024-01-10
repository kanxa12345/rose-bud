import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Client from "./Client";
import WhyUs from "./WhyUs";
import About from "./About";
import Mvv from "./Mvv";
import FeatureJob from "./FeatureJob";
import Country from "./Country";

const Main = () => {
  return (
    <>
      <Banner />
      <About />
      <WhyUs />
      <Country />
      <FeatureJob />
      <Mvv />
      <Testimonial />
      <Client />
    </>
  );
};

export default Main;
