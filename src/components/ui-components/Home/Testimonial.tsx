"use client";
import Divider from "@/components/units/Divider";
import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { client_slider_img } from "../../../../public/assets/img/page";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const Testimonial = () => {
  return (
   <div>
     <div className="container mx-auto bg-primary">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className=" p-10 ">
            <div className="flex justify-between">
              <div>
                <h3 className="text-[20px] text-white font-semibold">
                  WHAT CLIENTS SAY
                </h3>
                <Divider />
              </div>
              <div className=" hidden md:flex -mt-2 gap-2">
                <div className="button-prev-slide-five right-0   grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleLeft className="text-gray-500 text-xl" />
                </div>
                <div className="button-next-slide-five  grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-gray-500 text-xl" />
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              navigation={{
                nextEl: ".button-next-slide-five",
                prevEl: ".button-prev-slide-five",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="relative"
            >
              <SwiperSlide>
                <div className="flex items-center gap-4 py-5 md:flex-nowrap flex-wrap">
                  <Image
                    src={client_slider_img}
                    width={113}
                    height={113}
                    alt=""
                    className="rounded-3xl"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-white">
                      “Sollicitudin, lorem quis bibendum en auctor, aks
                      consequat ipsum, nec a sagittis sem nibh id elit. Duis sed
                      odo nibh vulputate Proin gravida nibh vel velit auctor
                      aliquet. Aenean sollicitudin”
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <div className="flex text-[#f1a835] items-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <CiStar />
                      </div>
                      <div className="flex items-center">
                        <span className="text-white">~ </span>
                        <p className="text-white">
                          Jenniffer Doe{" "}
                          <span className="text-secondary">(Ui Designer)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-4 py-5 md:flex-nowrap flex-wrap">
                  <Image
                    src={client_slider_img}
                    width={113}
                    height={113}
                    alt=""
                    className="rounded-3xl"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-white">
                      “Sollicitudin, lorem quis bibendum en auctor, aks
                      consequat ipsum, nec a sagittis sem nibh id elit. Duis sed
                      odo nibh vulputate Proin gravida nibh vel velit auctor
                      aliquet. Aenean sollicitudin”
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <div className="flex text-[#f1a835] items-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <CiStar />
                      </div>
                      <div className="flex items-center">
                      <span className="text-white">~ </span>
                        <p className="text-white">
                          Jenniffer Doe{" "}
                          <span className="text-secondary">(Ui Designer)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Testimonial;
