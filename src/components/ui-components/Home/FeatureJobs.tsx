"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { hiringCompanies } from "@/components/constant";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import {
  job_post_img3,
  job_post_img4,
  job_post_img5,
  logo,
} from "../../../../public/assets/logo/page";
import Divider from "@/components/units/Divider";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {
  job_post_img1,
  job_post_img2,
} from "../../../../public/assets/logo/page";
import { FaCcPaypal } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsTagsFill } from "react-icons/bs";
import {
  spotlight_img,
  career_img1,
  career_img2,
  career_img3,
} from "../../../../public/assets/img/page";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";

const FeatureJobs = () => {
  const pagination = {
    el: ".swiper-pagination-two",
    clickable: true,
    renderBullet: (index: number, className: string): string => {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="container mx-auto mb-9 px-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-9">
          <div className="border-[1px] border-[#e9e9e9] p-5 bg-white">
            <div className="flex justify-between">
              <div>
                <h3 className="text-[20px] font-semibold">
                  Top Hiring Companies
                </h3>
                <Divider />
              </div>
              <div className="flex -mt-2 gap-2">
                <div className="button-prev-slide right-0   grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleLeft className="text-gray-500 text-xl" />
                </div>
                <div className="button-next-slide  grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-gray-500 text-xl" />
                </div>
              </div>
            </div>
            <Swiper
               slidesPerView={4}
               breakpoints={{
                 280:{
                  slidesPerView: 1,
                 },
                 640: {
                   slidesPerView: 2,
                 },
                 768: {
                   slidesPerView: 3,
                 },
                 1024: {
                   slidesPerView: 4,
                 },
               }} 
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="relative"
            >
              {hiringCompanies.map((com, index) => (
                <SwiperSlide key={com.id} className="group">
                  <div className="border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] text-center py-10 px-2 group-hover:border-b-red transition-all duration-500 ease-in-out">
                    <Image
                      className="mx-auto mb-5"
                      src={com.icon}
                      width={61}
                      height={61}
                      alt="Graphics Designer"
                    />
                    <h3 className="text-[14px] font-bold leading-none">
                      {com.companyname}
                    </h3>
                    <p className="text-[14px] my-2">({com.address})</p>
                    <button className="bg-black rounded-lg px-4 py-2 text-[12px] text-white group-hover:bg-red transition-all duration-500 ease-in-out">
                      {com.count} Opening
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <div className="my-9">
                <h3 className="text-[20px] font-semibold">Recent Jobs</h3>
                <Divider />
              </div>
            </div>
            <div className="col-span-6 grid grid-cols-12 gap-3">
              <button className="col-span-12 md:col-span-3 font-bold px-3 py-2 flex items-center rounded-lg">
                <div>FETURED</div>
              </button>
              <button className="col-span-12 md:col-span-3 font-bold px-3 py-2 flex items-center rounded-lg">
                REMOTELY
              </button>
              <button className="col-span-12 md:col-span-3 font-bold px-3 py-2 flex items-center rounded-lg">
                PART TIME
              </button>
              <button className="col-span-12 md:col-span-3 font-bold px-3 py-2 flex items-center rounded-lg">
                FULL TIME
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".button-next-slide-three",
              prevEl: ".button-prev-slide-three",
            }}
            pagination={pagination}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="relative"
          >
            <SwiperSlide>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img1}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12  md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img2}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img3}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img4}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img5}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12  md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img1}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img2}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img3}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img4}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start  md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
              <div className="group">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-12 md:col-span-8 flex items-center gap-6 px-6 py-6">
                    <div>
                      <Image
                        src={job_post_img5}
                        width={100}
                        height={95}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto flex-col">
                      <div className="mb-2">
                        <h4 className="font-bold text-[16px]">
                          HTML Developer (1-2 Yrs Exp.)
                        </h4>
                        <p className="text-[16px] text-secondary">
                          Webstrot Technology Pvt. Ltd.
                        </p>
                      </div>
                      <ul className="flex gap-3 flex-wrap">
                        <li className="flex items-center">
                          <FaCcPaypal className="text-red items-center" />
                          &nbsp;{" "}
                          <p className="text-[16px] font-bold">
                            $12K - 15k P.A.
                          </p>
                        </li>
                        <li className="flex items-center">
                          <CiLocationOn className="text-red" />
                          &nbsp;{" "}
                          <p className="text-[16px] text-[#797979]">
                            Caliphonia, PO 455001
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 px-6 py-6">
                    <ul>
                      <div className="flex gap-4 justify-start md:justify-end">
                        <li>
                          <FaRegHeart className=" border-[1px] p-1 border-[#e9e9e9] rounded-lg cursor-pointer hover:bg-red hover:text-white text-[30px] text-red" />
                        </li>
                        <li className="text-white  flex flex-col gap-4">
                          <button className="bg-green rounded-lg px-3 py-1">
                            PART TIME
                          </button>
                          <button className="bg-red px-3 py-1 rounded-lg">
                            APPLY
                          </button>
                        </li>
                      </div>
                      <li className="bg-red text-white"></li>
                    </ul>
                  </div>
                  <div className="col-span-12 px-6 py-6 bg-[#e9e9e9] group-hover:bg-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                    <ul className="flex gap-3 flex-wrap">
                      <li className="flex items-center gap-2">
                        <BsTagsFill className="text-secondary" />{" "}
                        <span className="font-semibold">
                          Trending Keywords :
                        </span>
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
              </div>
            </SwiperSlide>
           
          </Swiper>
          {/* Pagination */}
          <div className="flex items-center gap-2 justify-between my-8">
            <div className="button-prev-slide-three   grid place-items-center text-black rounded-full">
              <p className="border-[1px] border-[#e9e9e9] rounded-lg px-2 py-1">
                PREV
              </p>
            </div>
            <div className="swiper-pagination-two text-center "></div>
            <div className="button-next-slide-three mr-2  grid place-items-center text-black rounded-full">
              <p className="border-[1px] border-[#e9e9e9] rounded-lg px-2 py-1">
                NEXT
              </p>
            </div>
          </div>
          {/* Role */}
          <div className="border-[1px] grid grid-cols-12   md:gap-0 gap-4 border-[#e9e9e9] w-full rounded-lg overflow-hidden">
            <div className="col-span-12 md:col-span-6 py-14 px-10 text-center bg-white border-r-[1px] border-[#e9e9e9] ">
              <RiComputerLine   className="mx-auto text-6xl text-secondary mb-4"/>
              <h4 className="font-bold text-[20px]">I’M AN EMPLOYER</h4>
              <div className="flex gap-1 my-4 items-center justify-center">
                <div className="w-[10px] h-[2px] bg-secondary"></div>
                <div className="w-[30px] h-[2px] bg-secondary"></div>
              </div>
              <div className="flex">
              <p className="text-[#797979] text-[14px] mb-5">
                Signed in companies are able to post new job offers, searching
                for candidate...
              </p>
              <div className="-mt-[45px] -mr-[72px] md:block hidden">
                <div className="bg-secondary rounded-2xl text-white p-5 rotate-45  ">
                   <div className="-rotate-45">
                   OR
                   </div>
              </div>
              </div>
              </div>
              <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2">
              <div>
                <IoAddCircleOutline />
              </div>
              <div>
                <h3>REGISTER AS A COMPANY</h3>
              </div>
            </button>
            </div>
            <div className="col-span-12 md:col-span-6 py-14 px-10 text-center bg-black">
              <CiUser   className="mx-auto text-6xl text-secondary mb-4"/>
              <h4 className="font-bold text-[20px] text-white">I’M AN CANDIDATE</h4>
              <div className="flex gap-1 my-4 items-center justify-center">
                <div className="w-[10px] h-[2px] bg-secondary"></div>
                <div className="w-[30px] h-[2px] bg-secondary"></div>
              </div>
              <p className="text-[#797979] text-[14px] mb-5">
                Signed in companies are able to post new job offers, searching
                for candidate...
              </p>
              <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2">
              <div>
                <IoAddCircleOutline />
              </div>
              <div>
                <h3>REGISTER AS A COMPANY</h3>
              </div>
            </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-black text-center py-6 px-2 mb-6">
            <Image
              width={117}
              height={36}
              src={logo}
              alt="Logo"
              className="mx-auto mb-6"
            />
            <h4 className="text-[16px] text-white">
              Get Best Matched Jobs <br /> On your Email. <br /> Add Resume NOW!
            </h4>
            <div className="flex gap-1 my-4 items-center justify-center">
              <div className="w-[10px] h-[2px] bg-secondary"></div>
              <div className="w-[30px] h-[2px] bg-secondary"></div>
            </div>
            <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2">
              <div>
                <IoAddCircleOutline />
              </div>
              <div>
                <h3>ADD RESUME</h3>
              </div>
            </button>
          </div>
          {/* Job spotlight */}
          <div className="bg-white rounded-lg mb-6">
            <div className="flex justify-between items-center gap-2 bg-secondary  rounded-t-lg">
              <div className=" text-white px-4 py-2">
                <h4>Job Spotlight</h4>
              </div>
              <div className="flex gap-2">
                <div className="button-prev-slide-two   grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleLeft className="text-white text-xl" />
                </div>
                <div className="swiper-pagination"></div>

                <div className="button-next-slide-two mr-2  grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-white text-xl" />
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".button-next-slide-two",
                prevEl: ".button-prev-slide-two",
              }}
              loop={true}
              modules={[Pagination, Autoplay, Navigation]}
              className="relative"
            >
              <SwiperSlide>
                <div className="p-10">
                  <div>
                    <Image
                      className="mb-5"
                      src={spotlight_img}
                      width={209}
                      height={130}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-left">
                      <h4 className="font-bold text-[16px]">
                        HTML Developer (1-2 Yrs Exp.)
                      </h4>
                      <p className="text-[16px] text-secondary">
                        Webstrot Technology Pvt. Ltd.
                      </p>
                    </div>
                    <ul>
                      <li className="flex items-center">
                        <FaCcPaypal className="text-red items-center" />
                        &nbsp;{" "}
                        <p className="text-[16px] font-bold">$12K - 15k P.A.</p>
                      </li>
                      <li className="flex items-center">
                        <CiLocationOn className="text-red" />
                        &nbsp;{" "}
                        <p className="text-[16px] text-[#797979]">
                          Caliphonia, PO 455001
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2 mt-8">
                    <div>
                      <IoAddCircleOutline />
                    </div>
                    <div>
                      <h3>ADD RESUME</h3>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-10">
                  <div>
                    <Image
                      className="mb-5"
                      src={spotlight_img}
                      width={209}
                      height={130}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-left">
                      <h4 className="font-bold text-[16px]">
                        HTML Developer (1-2 Yrs Exp.)
                      </h4>
                      <p className="text-[16px] text-secondary">
                        Webstrot Technology Pvt. Ltd.
                      </p>
                    </div>
                    <ul>
                      <li className="flex items-center">
                        <FaCcPaypal className="text-red items-center" />
                        &nbsp;{" "}
                        <p className="text-[16px] font-bold">$12K - 15k P.A.</p>
                      </li>
                      <li className="flex items-center">
                        <CiLocationOn className="text-red" />
                        &nbsp;{" "}
                        <p className="text-[16px] text-[#797979]">
                          Caliphonia, PO 455001
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2 mt-8">
                    <div>
                      <IoAddCircleOutline />
                    </div>
                    <div>
                      <h3>ADD RESUME</h3>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Job by category */}
          <div className="bg-white rounded-lg mb-6">
            <div className="flex justify-between items-center gap-2 bg-secondary  rounded-t-lg">
              <div className=" text-white px-4 py-2">
                <h4>Job by Category</h4>
              </div>
            </div>
            <div className="py-10 px-3">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Graphics Designer{" "}
                      <span className="text-secondary">(214)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Engineering Jobs{" "}
                      <span className="text-secondary">(514)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Mainframe jobs{" "}
                      <span className="text-secondary">(254)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Legal jobs <span className="text-secondary">(235)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      IT jobs <span className="text-secondary">(209)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      R&D jobs <span className="text-secondary">(47)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Government jobs{" "}
                      <span className="text-secondary">(541)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      PSU jobs <span className="text-secondary">(19)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCirclePlus className="text-secondary" />
                  <p>
                    <Link href="#" className="text-secondary font-semibold">
                      VIEW ALL CATEGORIES
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Career Advice */}
          <div className="bg-white rounded-lg mb-6">
            <div className="flex justify-between items-center gap-2 bg-secondary  rounded-t-lg">
              <div className=" text-white px-4 py-2">
                <h4>Career Advice</h4>
              </div>
            </div>
            <div className="p-10">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <Image src={career_img1} width={80} height={80} alt="" />
                  <div>
                    <p className="text-[14px] font-bold">
                      Job Seekeks <br />
                      OCT - 2017
                    </p>
                    <div className="flex items-center gap-2">
                      <CiCalendar />
                      <p className="text-[12px]">20 OCT, 2016</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={career_img2} width={80} height={80} alt="" />
                  <div>
                    <p className="text-[14px] font-bold">
                      Job Seekeks <br />
                      OCT - 2017
                    </p>
                    <div className="flex items-center gap-2">
                      <CiCalendar />
                      <p className="text-[12px]">20 OCT, 2016</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={career_img3} width={80} height={80} alt="" />
                  <div>
                    <p className="text-[14px] font-bold">
                      Job Seekeks <br />
                      OCT - 2017
                    </p>
                    <div className="flex items-center gap-2">
                      <CiCalendar className="text-red" />
                      <p className="text-[12px]">20 OCT, 2016</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaCirclePlus className="text-secondary" />
                  <p>
                    <Link href="#" className="text-secondary font-semibold">
                      VIEW ALL
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Job category */}
          <div className="bg-white rounded-lg mb-6">
            <div className="flex justify-between items-center gap-2 bg-secondary  rounded-t-lg">
              <div className=" text-white px-4 py-2">
                <h4>Job by Category</h4>
              </div>
            </div>
            <div className="py-10 px-3">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Graphics Designer{" "}
                      <span className="text-secondary">(214)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Engineering Jobs{" "}
                      <span className="text-secondary">(514)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Mainframe jobs{" "}
                      <span className="text-secondary">(254)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      Legal jobs <span className="text-secondary">(235)</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <IoMdArrowDropright />
                  <p>
                    <Link href="#">
                      IT jobs <span className="text-secondary">(209)</span>
                    </Link>
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <FaCirclePlus className="text-secondary" />
                  <p>
                    <Link href="#" className="text-secondary font-semibold">
                      VIEW ALL CATEGORIES
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
