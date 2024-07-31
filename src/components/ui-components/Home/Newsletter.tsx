import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineMail, MdOutlineNotificationImportant } from "react-icons/md";
const Newsletter = () => {
  return (
    <div className="bg-[#2f3345] py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 items-center justify-center gap-4">
          <div className="md:col-span-6 lg:col-span-4 col-span-12">
            <div className="flex items-center gap-3">
              <MdOutlineNotificationImportant className="text-[40px] text-white" />
              <div>
                <h3 className="text-[30px] text-white">
                  GET JOB NOTIFICATIONS
                </h3>
                <p className="text-[16px] text-white">
                  Free Subscribe Our Newsletter Now
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8 grid grid-cols-12 gap-4 items-center justify-center">
            <div className="relative col-span-9">
              <MdOutlineMail className="fa fa-dot-circle-o absolute top-1/2 transform -translate-y-1/2 left-3 text-secondary text-[16px]" />
              <div>
                <input
                  placeholder="Keyword e.g. (Job Title, Description, Tags)"
                  className="w-full p-2 border rounded-lg focus:outline-gray-400 pl-8"
                />
            
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-3 col-span-12">
            <button className="text-white bg-red px-10 py-2 rounded-lg">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
