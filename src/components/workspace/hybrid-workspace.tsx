import React from "react";
import Image from "next/image";

const HybridWorkspace = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#FFF8F0] p-8 lg:p-16">
      {/* Left Section with Images */}
      <div className="lg:w-1/2 flex flex-col space-y-4">
        <div className="relative">
          <div className="relative w-full h-64">
            <Image
              src="/images/hybrid-top.jpg" // Replace with your image path
              alt="Workspace Top"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute -bottom-6 left-6 w-4/5 h-48">
            <Image
              src="/images/hybrid-bottom.jpg" // Replace with your image path
              alt="Workspace Bottom"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Right Section with Text */}
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
          Unlock a World of <span className="text-yellow-500">HYBRID</span>{" "}
          WorkSpace.
        </h2>
        <p className="mt-4 text-gray-700 text-sm lg:text-lg">
          Hybrid working is a better way to work that gives businesses and
          workers more choice on how and where they work. It’s a healthier,
          greener, flexible, and more cost-effective way to do business.
        </p>
        <p className="mt-4 text-gray-700 text-sm lg:text-lg">
          Hybrid working is greener, more flexible and more productive. And it
          keeps your people happier and more focused. We should say It’s a
          no-brainer.
        </p>
      </div>
    </div>
  );
};

export default HybridWorkspace;
