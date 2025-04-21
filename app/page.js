"use client"
import ClientFeedbackSection from "@/components/ClientFeedbackSection";
import PricingSection from "@/components/PricingSection";
import TopBlogsSection from "@/components/TopBlogsSection";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import Typed from 'typed.js';

const Page = () => {
   // Create reference to store the DOM element containing the animation
   const el =useRef(null);

  useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ['Coder', 'Web Developer', 'Full Stack Developer', 'Nextjs Developer', 'Frontend Developer'],
       typeSpeed: 50,
     });
 
     return () => {
       // Destroy Typed instance during cleanup to stop animation
       typed.destroy();
     };
   }, []);
 
  return (
   <>
    <div className="flex flex-col md:flex-row items-center justify-between  p-6   max-w-6xl mx-auto  mt-10">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-xl font-bold ">Priyanshu Kumari</h1>
        <p className="mt-2  text-3xl ">
          I&apos;m  <span ref={el} />
        </p>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center md:justify-start gap-4  text-xl">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>

        {/* Website username */}
        <p className="mt-2 text-sm ">@realcodemeetup</p>
      </div>

      {/* Right Section - Image */}
      <div className="mt-6 md:mt-0 md:ml-6">
      <Image
  src="/images/women.png"
  alt="Loading..."
  width={400}
  height={550}
  className="w-96 h-[550px] rounded-lg object-cover"
/>

      </div>
    </div>
    <PricingSection/>
    <ClientFeedbackSection/>
    <TopBlogsSection/>
   </>
  );
};

export default Page;

