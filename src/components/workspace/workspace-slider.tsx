"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const tabs = [
  "Office Space",
  "Coworking Desk",
  "Meeting Room",
  "Virtual Offices",
  "Membership",
];

const workspaceData = [
  {
    tab: "Office Space",
    title: "Private Office",
    description:
      "A range of ready-to use, fully equipped offices with everything you need to get started.",
    image: "/images/workspace-slider/meeting-room.png",
  },
  {
    tab: "Office Space",
    title: "Custom Offices",
    description:
      "When off-the-shelf simply isnt enough. Customize all aspects of your space, including furniture and branding..",
    image: "/images/workspace-slider/training-room.png",
  },
  {
    tab: "Office Space",
    title: "Day Offices",
    description:
      "A Professional on-demand office space. Perfect when you need to get your head down and do your best work.",
    image: "/images/workspace-slider/board-room.png",
  },
  {
    tab: "Office Space",
    title: "Membership Plan",
    description:
      "Flexible access to Day Offices where and when you choose with 5, 10 and unlimited days per month.",
    image: "/images/workspace-slider/board-room.png",
  },

  {
    tab: "Coworking Desk",
    title: "Dedicated Desk",
    description:
      "Rent as many desks as you need in a dynamic, shared office space. Business address and storage.",
    image: "/images/workspace-slider/meeting-room.png", 
  },
  {
    tab: "Coworking Desk",
    title: "Day Coworking",
    description:
      "On-demand access to inspiring, open-plan coworking spaces, so there's always a desk when you need one.",
    image: "/images/workspace-slider/training-room.png", 
  },
  {
    tab: "Coworking Desk",
    title: "Coworking membership",
    description:
      "Want to Hot Desk more regularly? Rent a desk for 5, 10 or unlimited days each month.",
    image: "/images/workspace-slider/board-room.png", 
  },
  {
    tab: "Meeting Room",
    title: "Meeting Room",
    description:
      "Perfect places to meet, collaborate, and conduct interviews, research groups, and appraisals. Available hourly and daily.",
    image: "/images/workspace-slider/meeting-room.png", 
  },
  {
    tab: "Meeting Room",
    title: "Training Room",
    description:
      "Perfect when you need a purpose-built space with desks, whiteboards, and screens/projectors for training sessions.",
    image: "/images/workspace-slider/training-room.png", 
  },
  {
    tab: "Meeting Room",
    title: "Board Rooms",
    description:
      "A professional on-demand office space perfect for board, management, and staff meetings.",
    image: "/images/workspace-slider/board-room.png", 
  },
  {
    tab: "Virtual Offices",
    title: "Online Workspace",
    description:
      "A range of ready-to use, fully equipped offices with everything you need to get started.",
    image: "/images/workspace-slider/meeting-room.png", 
  },
  {
    tab: "Virtual Offices",
    title: "Business Address",
    description:
      "When off-the-shelf simply isnt enough. Customize all aspects of your space, including furniture and branding..",
    image: "/images/workspace-slider/training-room.png", 
  },
  {
    tab: "Virtual Offices",
    title: "Virtual Office Standard",
    description:
      "A prestigious business address with telephone answering, a virtual receptionist, and access to meeting rooms and 5 days of physical office per month.",
    image: "/images/workspace-slider/board-room.png", 
  },
  {
    tab: "Membership",
    title: "Community Membership",
    description:
      "Enjoy access to our shared workspaces and events with a flexible and affordable membership plan.",
    image: "/images/workspace-slider/meeting-room.png", 
  },
  {
    tab: "Membership",
    title: "Community Membership",
    description:
      "Enjoy access to our shared workspaces and events with a flexible and affordable membership plan.",
    image: "/images/workspace-slider/training-room.png", 
  },
  {
    tab: "Membership",
    title: "Community Membership",
    description:
      "Enjoy access to our shared workspaces and events with a flexible and affordable membership plan.",
    image: "/images/workspace-slider/board-room.png", 
  },
];

const WorkspaceSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Meeting Room");

  // Filter cards based on the active tab
  const filteredCards = workspaceData.filter((data) => data.tab === activeTab);

  return (
    <div className="container p-8 mt-5">
      <h1 className="text-3xl font-bold text-center mb-8">
        Book Our Workspaces
      </h1>
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 relative transition-all ${
              activeTab === tab
                ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary"
                : "text-gray-700 hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredCards.map((card, index) => (
          <SwiperSlide key={index} className="p-4">
            <div>
              <div className="relative h-96 rounded-md overflow-hidden shadow-lg">
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500} // Adjust width based on your design
                  height={256} // Adjust height based on your design
                  className="w-full h-96 object-cover"
                  priority // Optional: for optimizing loading
                />

                {/* Overlay Content */}
                <div className="absolute bottom-0 right-0 w-3/4 bg-primary text-black p-4" style={{border:"4px solid #ffffff"}}>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="text-sm mt-2">{card.description}</p>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="mt-5 flex justify-between space-x-2">
                <button className="bg-primary text-white px-4 py-2 rounded-2xl shadow hover:bg-yellow-100">
                  Reserve
                </button>
                <button className="bg-white text-primary px-4 py-2 rounded-2xl shadow hover:bg-yellow-600 border-solid border-2 border-primary">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkspaceSlider;
