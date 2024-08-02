"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Divider from "@/components/units/Divider";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { client_img1, client_img2, client_img3 } from "../../../../public/assets/img/page";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
const Deals = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-9 mt-6">
          <div className="py-5">
            <div className="flex justify-between">
              <div>
                <h3 className="text-[20px] font-semibold">
                  OFFERING THE BEST DEALS
                </h3>
                <Divider />
              </div>
              <div className="hidden md:flex -mt-2 gap-2">
                <div className="button-prev-slide-four right-0   grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleLeft className="text-gray-500 text-xl" />
                </div>
                <div className="button-next-slide-four  grid place-items-center text-white rounded-full">
                  <FaRegArrowAltCircleRight className="text-gray-500 text-xl" />
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              navigation={{
                nextEl: ".button-next-slide-four",
                prevEl: ".button-prev-slide-four",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="relative"
            >
              <SwiperSlide>
                 <div className="grid grid-cols-12 gap-5 mb-5">
                     <div className="col-span-12  md:col-span-6">
                      <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <IoIosSearch/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Search a Jobs</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div>
                      
                     </div>
                     <div className="col-span-12  md:col-span-6">
                     <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <FaUsers/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Apply a Good Jobs</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div> 
                     </div>
                 </div>
                 <div className="grid grid-cols-12 gap-5">
                     <div className="col-span-12  md:col-span-6">
                      <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <IoShieldCheckmark/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Jobs Security</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div>
                      
                     </div>
                     <div className="col-span-12  md:col-span-6">
                     <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <MdNotificationsActive/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Job Notifications</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div> 
                     </div>
                 </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className="grid grid-cols-12 gap-5 mb-5">
                     <div className="col-span-12  md:col-span-6">
                      <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <IoIosSearch/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Search a Jobs</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div>
                      
                     </div>
                     <div className="col-span-12  md:col-span-6">
                     <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <FaUsers/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Apply a Good Jobs</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div> 
                     </div>
                 </div>
                 <div className="grid grid-cols-12 gap-5">
                     <div className="col-span-12  md:col-span-6">
                      <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <IoShieldCheckmark/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Jobs Security</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div>
                      
                     </div>
                     <div className="col-span-12  md:col-span-6">
                     <div className="group">
                      <div className="bg-white flex p-10 gap-4 border-x-[1px] border-t-[1px] border-b-[2px] border-x-[#e9e9e9] border-t-[#e9e9e9] border-b-[#23c0e9] group-hover:border-b-red transition-all duration-500 ease-in-out">
                         <div className="text-[35px] text-secondary group-hover:text-red transition-all duration-500 ease-in-out">
                         <MdNotificationsActive/>
                         </div>
                         <div>
                         <h4 className="text-[20px] font-semibold mb-3 group-hover:text-red transition-all duration-500 ease-in-out">
                            <Link href={"#"}>Job Notifications</Link>
                         </h4>
                         <p className="text-[#797979] text-[14px]">Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
                         </div>
                       </div>
                      </div> 
                     </div>
                 </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 mt-6">
        <div className="bg-white rounded-lg mb-6">
            <div className="flex justify-between items-center gap-2 bg-secondary  rounded-t-lg">
              <div className=" text-white px-4 py-2">
                <h4>Career Advice</h4>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <Image src={client_img1} width={80} height={80} alt="" />
                  <div>
                    <p className="text-[14px] font-bold">
                    Akshay Handge
                    </p>
                    <div className="flex items-center gap-2">
                     <FaRegFolderOpen className="text-red" />
                      <p className="text-[12px]">Developer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={client_img2} width={80} height={80} alt="" />
                  <div>
                    <p className="text-[14px] font-bold">
                    Akshay Handge
                    </p>
                    <div className="flex items-center gap-2">
                     <FaRegFolderOpen className="text-red" />
                      <p className="text-[12px]">Web Designer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={client_img1} width={80} height={80} alt="" />
                  <div>
                    <p className="text-[14px] font-bold">
                    Jacklen Fandores
                    </p>
                    <div className="flex items-center gap-2">
                      <FaRegFolderOpen className="text-red" />
                      <p className="text-[12px]">Ui Designer</p>
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
        </div>
      </div>
    </div>
  );
};

export default Deals;
