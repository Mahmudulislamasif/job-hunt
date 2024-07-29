import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { BsTagsFill } from "react-icons/bs";
import { featureJobs } from "@/components/constant";
const Hero = () => {
  return (
    <div className="hero-bg ">
      <div
      className=" bg-primary text-white 
        "
    >
      <div className="container mx-auto">
        <div className="px-4 md:p-0">
        <h1 className="text-[40px] pt-12 font-medium"><span className="text-secondary">3,000+ </span>Browse Jobs</h1>
        <p className="text-[20px] pt-[10px]">
          Find Jobs, Employment & Career Opportunities
        </p>
        </div>
        <div className="px-4 md:p-0">
        <form action="" className="py-10 ">
          <div className="bg-[#ffffff24] pt-[20px] pl-[20px] pr-[20px]">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 md:col-span-4  mb-4">
                <input
                  placeholder="Keyword e.g. (Job Title, Description, Tags)"
                  className="w-full p-2 border rounded-lg focus:outline-gray-400"
                />
              </div>
              <div className="col-span-12 md:col-span-3  mb-4">
                <div className="relative">
                  <BiTargetLock className="fa fa-dot-circle-o absolute top-1/2 transform -translate-y-1/2 left-3 text-secondary" />

                  <select className="w-full p-2 pl-10 border rounded-lg text-[#797979]">
                    <option>Select Location</option>
                    <option>Select Location</option>
                    <option>Select Location</option>
                    <option>Select Location</option>
                    <option>Select Location</option>
                  </select>
                  <i className="fa fa-angle-down absolute top-1/2 transform -translate-y-1/2 right-3"></i>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3  mb-4">
                <div className="relative">
                  <i className="fa fa-dot-circle-o absolute top-1/2 transform -translate-y-1/2 left-3"></i>
                  <select className="w-full p-2 pl-10 border rounded-lg text-[#797979]">
                    <option>Experience</option>
                    <option>Experience</option>
                    <option>Experience</option>
                    <option>Experience</option>
                    <option>Experience</option>
                  </select>
                  <i className="fa fa-angle-down absolute top-1/2 transform -translate-y-1/2 right-3"></i>
                </div>
              </div>
              <div className="col-span-12 md:col-span-2  mb-4">
                <div className="mx-auto md:mr-4 w-1/2 md:w-full">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 bg-secondary text-white rounded"
                  >
                    <CiSearch className="mr-2" /> Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
        </div>
       <div className="px-4 md:p-0">
       <div className="pb-10">
          <ul className="flex gap-3 flex-wrap">
            <li className="flex items-center gap-2">
              <BsTagsFill className="text-secondary" /> <span className="font-semibold">Trending Keywords :</span>
            </li>
            <li>
              <a href="#">ui designer,</a>
            </li>
            <li>
              <a href="#">developer,</a>
            </li>
            <li>
              <a href="#">senior</a>
            </li>
            <li>
              <a href="#">it company,</a>
            </li>
            <li>
              <a href="#">design,</a>
            </li>
            <li>
              <a href="#">call center</a>
            </li>
          </ul>
        </div>
       </div>
        {/* Count jobs section */}
      </div>
      <div className="bg-[#ffffff24] mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
            {featureJobs.map((link, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center group transition-all duration-200 ease-in transform  hover:scale-100  lg:hover:scale-110 hover:bg-[#23c0e9] hover:shadow-[0px_0px_37px_#00000091] overflow-hidden ${
                  link.id === "6"
                    ? "border-r-[1px] border-[#ffffff21]"
                    : "border-l-[1px] border-[#ffffff21]"
                }`}
              >
                <div className="text-center py-10">
                  <div className="text-secondary text-[25px] flex items-center justify-center group-hover:text-white">
                    {link.icon}
                  </div>
                  <h3 className="font-bold text-[18px] my-2">{link.title}</h3>
                  <p className="font-normal text-[16px] opacity-65">({link.totalJobs})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
