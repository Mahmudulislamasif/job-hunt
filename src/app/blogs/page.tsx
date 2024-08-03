import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import React from "react";
import {
  blog_img1,
  blog_img4,
  blog_img5,
  blog_img6,
  blog_small_img,
} from "../../../public/assets/img/page";
import {
  FaBehance,
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
  FaCode,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaGooglePlusG,
  FaHeart,
  FaInstagram,
  FaLaptop,
  FaLeaf,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCopy,
  FaRegHeart,
  FaStackOverflow,
  FaSun,
  FaTree,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { FaAngleRight, FaSquareXTwitter } from "react-icons/fa6";
const page = () => {
  return (
    <Layout>
      {/* Card 1 */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="border-x-[1px] group border-[#e9e9e9] bg-white">
              <div className=" relative w-full h-auto">
                <Image
                  src={blog_img1}
                  alt=""
                  layout="responsive"
                  width={870}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="px-6 py-10 mt-4">
                  <ul className="flex space-x-8 text-gray-600">
                    <li className="flex items-center gap-2">
                      <FaCalendarAlt className="text-red" />
                      20 OCT, 2017
                    </li>
                    <li className="flex items-center gap-2">
                      <FaRegCopy className="text-red" /> IT jobs
                    </li>
                  </ul>
                  <h3 className="mt-4 text-xl font-bold group-hover:text-red transition-all duration-500">
                    <a href="#">Hey Seeker, It’s Time to job Now!</a>
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                    Duis sed odio sit amet nibh vulputate cursus a sit amet
                    mris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                    tincidunt auctor a ornare odio. Sed non mauris vitae erat
                    consequat auctor eu in elit. Class aptent taciti sociosqu ad
                    litora torquent..
                  </p>
                </div>
                <div></div>
              </div>
              <div className="bg-[#f9f9f9] border-t-[1px] border-t-[#e9e9e9] border-b-[1px] border-b-secondary group-hover:border-b-red transition-all duration-500">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div className=" flex items-center gap-2">
                    <Image
                      src={blog_small_img}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p>John Doe</p>
                  </div>
                  <div className="text-[#79798a] flex gap-8 ">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                    <Link href="#">
                      <FaSquareXTwitter />
                    </Link>
                    <Link href="#">
                      <FaPinterestP />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="#">
                      <FaGooglePlusG />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">Hello</div>
        </div>
      </div>
      {/* card 2 */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="border-x-[1px] group border-[#d3d3d3] bg-gray-50">
              <div className="flex flex-col-reverse lg:flex-row">
                <div className="p-6 flex-1">
                  <ul className="flex space-x-8 text-blue-600">
                    <li className="flex items-center gap-2">
                      <FaClock className="text-blue" />
                      25 NOV, 2022
                    </li>
                    <li className="flex items-center gap-2">
                      <FaBriefcase className="text-blue" /> Design Jobs
                    </li>
                  </ul>
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue transition-all duration-500">
                    <a href="#">Design Your Future Today!</a>
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Transform your career with innovative design roles. Embrace
                    creativity and redefine the future through ...
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    src={blog_img1}
                    alt=""
                    layout="responsive"
                    width={870}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="bg-gray-200 border-t-[1px] border-t-[#d3d3d3] border-b-[1px] border-b-secondary group-hover:border-b-blue transition-all duration-500">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src={blog_small_img}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p>Jane Smith</p>
                  </div>
                  <div className="text-[#79798a] flex gap-8">
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                    <Link href="#">
                      <FaBehance />
                    </Link>
                    <Link href="#">
                      <FaDribbble />
                    </Link>
                    <Link href="#">
                      <FaYoutube />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">Hello</div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="border-x-[1px] group border-[#d3d3d3] bg-gray-50">
              <div className="relative w-full h-auto">
                <div className="p-6 flex-1">
                  <ul className="flex space-x-8 text-purple-600">
                    <li className="flex items-center gap-2">
                      <FaLaptop className="text-purple" />
                      30 SEP, 2023
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-purple" /> Tech Jobs
                    </li>
                  </ul>
                  <h3 className="mt-4 text-xl font-bold group-hover:text-purple transition-all duration-500">
                    <a href="#">Code Your Way to Success!</a>
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Unlock new career heights with opportunities in technology.
                    Innovate, code, and transform the digital landscape.
                  </p>
                </div>
                <Image
                  src={blog_img1}
                  alt=""
                  layout="responsive"
                  width={870}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-gray-200 border-t-[1px] border-t-[#d3d3d3] border-b-[1px] border-b-secondary group-hover:border-b-purple transition-all duration-500">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src={blog_small_img}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p>James Brown</p>
                  </div>
                  <div className="text-[#79798a] flex gap-8">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                    <Link href="#">
                      <FaGithub />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="#">
                      <FaStackOverflow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">Hello</div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="border-x-[1px] group border-[#e9e9e9] bg-white">
              <div className="relative w-full h-auto">
                <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white">
                  <ul className="flex space-x-8">
                    <li className="flex items-center gap-2">
                      <FaSun className="text-yellow-500" />
                      01 JUN, 2023
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGlobe className="text-yellow-500" /> Travel Jobs
                    </li>
                  </ul>
                  <h3 className="mt-4 text-xl font-bold">
                    <a href="#">Explore the World with Work!</a>
                  </h3>
                  <p className="mt-2">
                    Discover exciting travel opportunities that let you explore
                    the world while you work. Adventure and career go hand in
                    hand.
                  </p>
                </div>
                <Image
                  src={blog_img1}
                  alt=""
                  layout="responsive"
                  width={870}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-gray-100 border-t-[1px] border-t-[#e9e9e9] border-b-[1px] border-b-secondary group-hover:border-b-yellow transition-all duration-500">
                <div className="px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src={blog_small_img}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p>Emily Clark</p>
                  </div>
                  <div className="text-[#79798a] flex gap-8">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="#">
                      <FaPinterestP />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">Hello</div>
        </div>
      </div>
      {/* card 5 */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white">
            <div className="p-4">
              <div className="relative w-full h-auto group overflow-hidden rounded-xl">
                <Image
                  src={blog_img4}
                  alt=""
                  width={391}
                  height={588}
                  className="w-full h-60 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="py-3 mt-4">
                <ul className="flex space-x-8 text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCalendarAlt className="text-red" />
                    20 OCT, 2017
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCopy className="text-red" /> IT jobs
                  </li>
                </ul>
                <h3 className="mt-4 text-xl font-bold group-hover:text-red transition-all duration-500">
                  <a href="#">Hey Seeker, It’s Time to job Now!</a>
                </h3>
                <p className="mt-2 text-gray-700">
                  Nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet nibh vulputate cursus a sit amet mris. Morbi
                  accumsan ipsum velit.
                </p>
                <Link
                  href={`#`}
                  className="text-secondary  mt-4 relative font-semibold flex gap-2 items-center group"
                >
                  <p>Read More</p>
                  <div className="relative">
                    <FaAngleRight className="transform  transition-opacity duration-500 ease-in-out group-hover:translate-x-3 group-hover:opacity-0" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white">
            <div className="p-4">
              <div className="relative w-full h-auto group overflow-hidden rounded-xl">
                <Image
                  src={blog_img5}
                  alt=""
                  width={391}
                  height={588}
                  className="w-full h-60 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="py-3 mt-4">
                <ul className="flex space-x-8 text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCalendarAlt className="text-red" />
                    20 OCT, 2017
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCopy className="text-red" /> IT jobs
                  </li>
                </ul>
                <h3 className="mt-4 text-xl font-bold group-hover:text-red transition-all duration-500">
                  <a href="#">Hey Seeker, It’s Time to job Now!</a>
                </h3>
                <p className="mt-2 text-gray-700">
                  Nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet nibh vulputate cursus a sit amet mris. Morbi
                  accumsan ipsum velit.
                </p>
                <Link
                  href={`#`}
                  className="text-secondary  mt-4 relative font-semibold flex gap-2 items-center group"
                >
                  <p>Read More</p>
                  <div className="relative">
                    <FaAngleRight className="transform  transition-opacity duration-500 ease-in-out group-hover:translate-x-3 group-hover:opacity-0" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="p-4">
              <div className="relative w-full h-auto group overflow-hidden rounded-xl">
                <Image
                  src={blog_img6}
                  alt=""
                  width={391}
                  height={588}
                  className="w-full h-60 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="py-3 mt-4">
                <ul className="flex space-x-8 text-gray-600">
                  <li className="flex items-center gap-2">
                    <FaCalendarAlt className="text-red" />
                    20 OCT, 2017
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRegCopy className="text-red" /> IT jobs
                  </li>
                </ul>
                <h3 className="mt-4 text-xl font-bold group-hover:text-red transition-all duration-500">
                  <a href="#">Hey Seeker, It’s Time to job Now!</a>
                </h3>
                <p className="mt-2 text-gray-700">
                  Nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet nibh vulputate cursus a sit amet mris. Morbi
                  accumsan ipsum velit.
                </p>
                <Link
                  href={`#`}
                  className="text-secondary  mt-4 relative font-semibold flex gap-2 items-center group"
                >
                  <p>Read More</p>
                  <div className="relative">
                    <FaAngleRight className="transform  transition-opacity duration-500 ease-in-out group-hover:translate-x-3 group-hover:opacity-0" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
