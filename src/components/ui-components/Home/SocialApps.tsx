import Image from "next/image";
import { mobile } from "../../../../public/assets/img/page";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { DiAndroid } from "react-icons/di";
const SocialApps = () => {
  return (
    <div className="w-full flex justify-center items-center bg-cover bg-no-repeat relative social-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
          <div className="flex justify-center">
            <div className="relative w-full h-[286] md:h-[506px] max-w-[400px]">
              <Image
                src={mobile}
                width={400}
                className="object-cover"
                height={587}
                alt=""
              />
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-[44px]">DOWNLOAD</h1>
            <h1 className="text-[44px]">JOB PORTAL APP NOW</h1>
            <div className="flex gap-1 my-2">
              <div className="w-[10px] h-[2px] bg-white"></div>
              <div className="w-[30px] h-[2px] bg-white"></div>
            </div>
            <p className="text-[20px] mt-10 mb-14">
              Fast, Simple & Delightful. All it takes is 30 seconds to Download.
            </p>
            <div className="flex items-center gap-4 md:gap-8 flex-wrap md:mb-0 mb-4">
              <button className="bg-white text-black rounded-lg px-4 py-4">
                <Link href="#" className="flex items-center text-[20px] gap-5">
                  <FaApple />
                  <p>APP STORE</p>
                </Link>
              </button>
              <button className="bg-white text-black rounded-lg px-4 py-4">
                <Link href="#" className="flex items-center text-[20px] gap-5">
                  <DiAndroid />
                  <p>PLAY STORE</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialApps;
