import React from "react";
import Image from "next/image";
import Link from "next/link";

const PerfectMembership = () => {
  return (
    <div className="container flex flex-col gap-2 lg:flex-row items-center p-8 lg:p-16 mt-24">

      

      {/* Left Section with Text */}
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:h-[600px] px-5">
        <h2 className="text-3xl lg:text-5xl font-bold font-heading leading-tight">
        Find Your Perfect <p> <span className="text-primary">Membership</span> Plan<br/>
        Today.</p>
        </h2>
        <p className="mt-10 w-96 text-gray-700 text-sm lg:text-lg font-sans">
        Explore our range of memberships to discover the ideal match for your work style. Flexible terms and multiple locations give you the freedom to work your way.
        </p>


        <div className="mt-11">
        <Link
            href="/"
            className=" px-8 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Become a Member
          </Link>

        </div>

        
      </div>

      
         {/* Right Section with Images */}
         <div className="lg:w-1/2 flex flex-col space-y-4">
        <div className="relative w-full lg:h-[600px]">
          <Image
            src="/images/perfect-membership.png"
            alt="Workspace Top"
            width={700}
            height={500}
            objectFit="cover"
            
          />
        </div>
      </div>

     
    </div>
  );
};

export default PerfectMembership;
