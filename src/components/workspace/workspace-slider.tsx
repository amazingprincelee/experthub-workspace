"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tabs = ["Office Space", "Coworking Desk", "Meeting Room", "Virtual Offices", "Membership"];

const workspaceData = [
  {
    tab: "Office Space",
    title: "Private Office",
    description:
      "A range of ready-to use, fully equipped offices with everything you need to get started.",
    image: "/images/workspace-slider/office-space.png", 
  },
  {
    tab: "Office Space",
    title: "Custom Offices",
    description:
      "When off-the-shelf simply isnt enough. Customize all aspects of your space, including furniture and branding..",
    image: "/images/workspace-slider/office-space.png", 
  },
  {
    tab: "Office Space",
    title: "Day Offices",
    description:
      "A Professional on-demand office space. Perfect when you need to get your head down and do your best work.",
    image: "/images/workspace-slider/office-space.png", 
  },
  {
    tab: "Office Space",
    title: "Membership Plan",
    description:
      "Flexible access to Day Offices where and when you choose with 5, 10 and unlimited days per month.",
    image: "/images/workspace-slider/office-space.png", 
  },
  

  {
    tab: "Coworking Desk",
    title: "Hot Desk",
    description:
      "A flexible desk in a shared workspace, perfect for freelancers, startups, and remote workers.",
    image: "/images/workspace-slider/coworking-desk.png", // Replace with actual paths
  },
  {
    tab: "Coworking Desk",
    title: "Dedicated Desk",
    description:
      "Your own personal desk in a shared workspace, complete with secure storage and 24/7 access.",
    image: "/images/workspace-slider/dedicated-desk.png", // Replace with actual paths
  },
  {
    tab: "Meeting Room",
    title: "Meeting Room",
    description:
      "Perfect places to meet, collaborate, and conduct interviews, research groups, and appraisals. Available hourly and daily.",
    image: "/images/workspace-slider/meeting-room.png", // Replace with actual paths
  },
  {
    tab: "Meeting Room",
    title: "Training Room",
    description:
      "Perfect when you need a purpose-built space with desks, whiteboards, and screens/projectors for training sessions.",
    image: "/images/workspace-slider/training-room.png", // Replace with actual paths
  },
  {
    tab: "Meeting Room",
    title: "Board Rooms",
    description:
      "A professional on-demand office space perfect for board, management, and staff meetings.",
    image: "/images/workspace-slider/board-room.png", // Replace with actual paths
  },
  {
    tab: "Virtual Offices",
    title: "Virtual Office",
    description:
      "Get a prestigious address and mail-handling services while working remotely. Perfect for businesses on the go.",
    image: "/images/workspace-slider/virtual-office.png", // Replace with actual paths
  },
  {
    tab: "Membership",
    title: "Community Membership",
    description:
      "Enjoy access to our shared workspaces and events with a flexible and affordable membership plan.",
    image: "/images/workspace-slider/membership.png", // Replace with actual paths
  },
];

const WorkspaceSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Meeting Room");

  // Filter cards based on the active tab
  const filteredCards = workspaceData.filter((data) => data.tab === activeTab);

  return (
    <div className="container p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Book Our Workspaces</h1>
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-yellow-500 text-white" : "text-gray-700"
            } hover:bg-yellow-500 hover:text-white transition-all`}
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
            <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-yellow-500">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              </div>
              <div className="flex justify-between px-4 py-2 border-t">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Reserve
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
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
