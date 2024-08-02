"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FiLogIn } from "react-icons/fi";
import { navLinks } from "@/components/constant";

import Image from "next/image";
import { logo } from "../../../public/assets/logo/page";
import Button from "../units/Button";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full">
      <div className="md:flex items-center justify-between bg-primary py-4 md:px-10 px-7">
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <div className="flex">
            <Image width={160} height={49} src={logo} alt="Logo" />
          </div>
        </div>
        {/* Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <RxCross1 className="text-white" />
          ) : (
            <IoMdMenu className="text-white" />
          )}
        </div>
        {/* Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primary text-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`md:ml-8 md:my-0 my-7 font-semibold ${
                index === navLinks.length - 1 ? "md:mr-8" : ""
              }`}
            >
              <Link
                href={link.id}
                className="text-white text-[14px] hover:text-[#fba311] duration-500"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <div className="flex gap-3 text-[16px]">
            <Link href={`#`}>
             <Button variant={`default`}>
             <FaUser />
             SIGN UP
           </Button>
            </Link>
            <Link href={`login`}>
            <Button variant={`default`}>
              <FiLogIn />
              LOGIN
            </Button> 
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
