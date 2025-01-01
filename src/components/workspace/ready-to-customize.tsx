import React from "react";
import Image from "next/image";
import Link from "next/link";

const ReadyToCustomize = () => {
  return (
    <div className="container flex flex-col gap-2 lg:flex-row items-center p-8 lg:p-16 mt-24">

         {/* Right Section with Images */}
      <div className="lg:w-1/2 flex flex-col space-y-4">
        <div className="relative w-full lg:h-[600px]">
          <Image
            src="/images/ready-customize.png"
            alt="Workspace Top"
            width={700}
            height={500}
            objectFit="cover"
            
          />
        </div>
      </div>
      

      {/* Left Section with Text */}
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:h-[600px] px-5">
        <h2 className="text-3xl lg:text-5xl font-bold font-heading leading-tight">
        Ready to <p> <span className="text-yellow-500">Customize</span><br/>
        Your Office?</p>
        </h2>
        <p className="mt-10  text-gray-700 text-sm lg:text-lg font-sans">
        Contact us today to discuss your custom office<br/> needs and bring your perfect workspace to life.
        </p>


        <div className="mt-11">
        <Link
            href="/"
            className="  px-8 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Book a Free Consultation
          </Link>

        </div>

        
      </div>

     
    </div>
  );
};

export default ReadyToCustomize;
