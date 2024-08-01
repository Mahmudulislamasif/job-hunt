import Image from "next/image";
import React from "react";
import { logo } from "../../../public/assets/logo/page";
import Divider from "../units/Divider";
import Link from "next/link";
import { FaCirclePlus } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
const Footer = () => {
  return (
  <div className="w-full flex justify-center items-center bg-cover bg-no-repeat relative footer-bg">
      <div >
      <div className="container mx-auto px-4">
        <div className="border-b-[1px] border-[#ffffff1a] py-10">
          <Image
            src={logo}
            width={117}
            height={36}
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="grid grid-cols-12 text-white gap-0 md:gap-6 pb-10 border-b-[1px] border-[#ffffff1a]">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 md:place-items-start">
            <h2 className="text-[20px] mt-14 mb-3 font-semibold">WHO WE ARE</h2>
            <Divider />
            <div className="text-[14px]">
              <p className="mt-8">
                This is Photoshops version of Lom Ipsum. Proin gravida nibh vel
                velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum.
              </p>
              <p className="my-4">
                Proin akshay handge vel velit auctor aliquet. Aenean
                sollicitudin,
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCirclePlus className="text-secondary" />
              <p>
                <Link href="#" className="text-secondary font-semibold">
                  READ MORE
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h2 className="text-[20px] mt-14 mb-3 font-semibold">
              FOR CANDIDATE
            </h2>
            <Divider />
            <div className="text-[14px] flex flex-col gap-4">
              <div className="flex items-center mt-4 gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Add A Resume</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Cadidate Dashboard</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Past Application</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Job Alert</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Bookmarks</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">My Acoounts</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Your Jobs</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h2 className="text-[20px] mt-14 mb-3 font-semibold">
              FOR EMPLOYERS
            </h2>
            <Divider />
            <div className="text-[14px] flex flex-col gap-4">
              <div className="flex items-center mt-4 gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Browse Candidate</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Employer Dashboard</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Add Job</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Job Page</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Job Packages</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Work Process</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">My Account</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-3 col-span-12">
            <h2 className="text-[20px] mt-14 mb-3 font-semibold">
              INFORMATION
            </h2>
            <Divider />
            <div className="text-[14px] flex flex-col gap-4">
              <div className="flex items-center mt-4 gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">About Us</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Terms & Conditions</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Career With Us</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Sitemap</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">Contact Us</Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-red" />
                <p>
                  <Link href="#">FAQs</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex flex-wrap justify-center md:justify-between gap-4">
            <p className="text-[12px] text-white">
             2022-23 Job Pro. All Rights Reserved.
            </p>
            <div className="text-white flex gap-8">
              <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <FaXTwitter />
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
  </div>
  );
};

export default Footer;
