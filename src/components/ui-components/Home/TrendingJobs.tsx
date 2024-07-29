"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { trandingJobs } from "@/components/constant";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
const TrendingJobs = () => {
  return (
    <div>
    <div className="container mx-auto my-9">
      <div className="flex">
        <div className="w-[15%] bg-secondary text-white font-bold text-[16px] text-center py-5 flex flex-col items-center justify-center">
          <h3>TRANDING</h3>
          <h4>JOBS</h4>
        </div>
        <div className="w-[100%] bg-white border-t-[1px] border-b-[1px] border-[#e9e9e9]">
          <Swiper slidesPerView={1}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }} 
          >
            
            {trandingJobs.map((link, index) => (
              <SwiperSlide key={link.id} className=" flex items-center border-r-[1px] border-[#e9e9e9]">
              <div className="p-4 w-full ">
                <div className="flex items-center ">
                  <Image src={link.icon} width={61} height={61} alt="Graphics Designer" />
                  <div className="ml-4 ">
                    <p className="text-[14px] font-bold">{link.desination}</p>
                    <p className="text-[14px] text-secondary">{link.totalJobs}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TrendingJobs;
