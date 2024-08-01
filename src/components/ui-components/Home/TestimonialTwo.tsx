"use client";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { testi_client_img1, testi_client_img2 } from "../../../../public/assets/img/page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const TestimonialTwo = () => {
  return (
    <div className="bg-[#8dc539]">
      <div className="container mx-auto py-20">
        <div className="text-center">
          <h3 className="text-[20px] text-white font-semibold">TESTIMONIAL</h3>
          <div className="flex gap-1 my-3 justify-center">
            <div className="w-[10px] h-[2px] bg-white"></div>
            <div className="w-[30px] h-[2px] bg-white"></div>
          </div>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={20} 
        pagination={{
            el:".swiper-pagination-three",
            clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        >
          <SwiperSlide>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="grid place-items-end">
           <div className="bg-white p-8 w-full relative ">
            <div className="bg-white  bottom-[-10px] rotate-45 w-8 h-8 absolute  right-6">

            </div>
           <div className="border-[1px] border-[#8dc539]">
              <div className="flex p-10  gap-2 ">
                <FaQuoteLeft className="text-[40px] -mt-4 text-[#8dc539]" />
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit.
                </p>
              </div>
            </div>
           </div>
           <div className="bg-white rounded-full mt-10">
             <div className="text-center flex gap-4 items-center">
                <div className="ml-4">
                <h2 className="text-[22px]">JOAN DOE</h2>
                <p>Designer</p>
                </div>
                <div>
                <Image
                 src={testi_client_img1}
                 width={87}
                 height={87}
                 alt=""
                 className="rounded-full"
                />
                </div>
             </div>
           </div>
          </div>
          <div className=" grid place-items-start">
          <div className="bg-white p-8 relative">
            <div className="bg-white  bottom-[-10px] rotate-45 w-8 h-8 absolute  left-6">

            </div>
           <div className="border-[1px] border-[#8dc539]">
              <div className="flex p-10  gap-2 ">
                <FaQuoteLeft className="text-[40px] -mt-4 text-[#8dc539]" />
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit.
                </p>
              </div>
            </div>
           </div>
           <div className="bg-white rounded-full mt-10 ">
             <div className="text-center flex gap-4 items-center">
             <div>
                <Image
                 src={testi_client_img2}
                 width={87}
                 height={87}
                 alt=""
                 className="rounded-full"
                />
                </div>
                <div className="mr-4">
                <h2 className="text-[22px]">JOAN DOE</h2>
                <p>Designer</p>
                </div>
               
             </div>
           </div>
          </div>
         </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid place-items-end">
           <div className="bg-white p-8 w-full relative ">
            <div className="bg-white  bottom-[-10px] rotate-45 w-8 h-8 absolute  right-6">

            </div>
           <div className="border-[1px] border-[#8dc539]">
              <div className="flex p-10  gap-2 ">
                <FaQuoteLeft className="text-[40px] -mt-4 text-[#8dc539]" />
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit.
                </p>
              </div>
            </div>
           </div>
           <div className="bg-white rounded-full mt-10">
             <div className="text-center flex gap-4 items-center">
                <div className="ml-4">
                <h2 className="text-[22px]">JOAN DOE</h2>
                <p>Designer</p>
                </div>
                <div>
                <Image
                 src={testi_client_img1}
                 width={87}
                 height={87}
                 alt=""
                 className="rounded-full"
                />
                </div>
             </div>
           </div>
          </div>
          <div className=" grid place-items-start">
          <div className="bg-white p-8 relative">
            <div className="bg-white  bottom-[-10px] rotate-45 w-8 h-8 absolute  left-6">

            </div>
           <div className="border-[1px] border-[#8dc539]">
              <div className="flex p-10  gap-2 ">
                <FaQuoteLeft className="text-[40px] -mt-4 text-[#8dc539]" />
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit.
                </p>
              </div>
            </div>
           </div>
           <div className="bg-white rounded-full mt-10 ">
             <div className="text-center flex gap-4 items-center">
             <div>
                <Image
                 src={testi_client_img2}
                 width={87}
                 height={87}
                 alt=""
                 className="rounded-full"
                />
                </div>
                <div className="mr-4">
                <h2 className="text-[22px]">JOAN DOE</h2>
                <p>Designer</p>
                </div>
               
             </div>
           </div>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid place-items-end">
           <div className="bg-white p-8 w-full relative ">
            <div className="bg-white  bottom-[-10px] rotate-45 w-8 h-8 absolute  right-6">

            </div>
           <div className="border-[1px] border-[#8dc539]">
              <div className="flex p-10  gap-2 ">
                <FaQuoteLeft className="text-[40px] -mt-4 text-[#8dc539]" />
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit.
                </p>
              </div>
            </div>
           </div>
           <div className="bg-white rounded-full mt-10">
             <div className="text-center flex gap-4 items-center">
                <div className="ml-4">
                <h2 className="text-[22px]">JOAN DOE</h2>
                <p>Designer</p>
                </div>
                <div>
                <Image
                 src={testi_client_img1}
                 width={87}
                 height={87}
                 alt=""
                 className="rounded-full"
                />
                </div>
             </div>
           </div>
          </div>
          <div className=" grid place-items-start">
          <div className="bg-white p-8 relative">
            <div className="bg-white  bottom-[-10px] rotate-45 w-8 h-8 absolute  left-6">

            </div>
           <div className="border-[1px] border-[#8dc539]">
              <div className="flex p-10  gap-2 ">
                <FaQuoteLeft className="text-[40px] -mt-4 text-[#8dc539]" />
                <p>
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit.
                </p>
              </div>
            </div>
           </div>
           <div className="bg-white rounded-full mt-10 ">
             <div className="text-center flex gap-4 items-center">
             <div>
                <Image
                 src={testi_client_img2}
                 width={87}
                 height={87}
                 alt=""
                 className="rounded-full"
                />
                </div>
                <div className="mr-4">
                <h2 className="text-[22px]">JOAN DOE</h2>
                <p>Designer</p>
                </div>
               
             </div>
           </div>
          </div>
          </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-three md:flex hidden justify-center mt-10 gap-2"></div> 
      </div>
    </div>
  );
};
 
export default TestimonialTwo;
