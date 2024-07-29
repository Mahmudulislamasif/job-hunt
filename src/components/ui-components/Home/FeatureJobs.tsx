"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { hiringCompanies } from "@/components/constant";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";
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
const FeatureJobs = () => {
  return (
    <div className="container mx-auto mb-9">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
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
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div className="group mb-9">
                <div className="grid grid-cols-12 bg-white border-[1px] group-hover:border-secondary border-[#e9e9e9] transition-all duration-500 ease-in-out">
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
                  <div className="col-span-8 flex items-center gap-6 px-6 py-6">
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
                      <ul className="flex gap-3">
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
                      <div className="flex gap-4 justify-end">
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
        </div>
        <div className="col-span-3">
          <div className="bg-black text-center py-6 px-2">
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
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
