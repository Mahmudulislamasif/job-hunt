import React from "react";

const Counter = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 p-10 bg-secondary">
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-white  text-[50px] font-black">2540 +</h1>
            <div className="flex gap-1  items-center justify-center">
              <div className="w-[10px] h-[2px] bg-white"></div>
              <div className="w-[30px] h-[2px] bg-white"></div>
            </div>
            <p className="text-white">Jobs Available</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 p-10 bg-deepsecondary">
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-white text-[50px] font-black">7325 +</h1>
            <div className="flex gap-1 items-center justify-center">
              <div className="w-[10px] h-[2px] bg-white"></div>
              <div className="w-[30px] h-[2px] bg-white"></div>
            </div>
            <p className="text-white">Members</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 p-10 bg-secondary">
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-white text-[50px] font-black">1924 +</h1>
            <div className="flex gap-1 items-center justify-center">
              <div className="w-[10px] h-[2px] bg-white"></div>
              <div className="w-[30px] h-[2px] bg-white"></div>
            </div>
            <p className="text-white">Resumes</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 p-10 bg-deepsecondary">
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-white text-[50px] font-black">4275 +</h1>
            <div className="flex gap-1 items-center justify-center">
              <div className="w-[10px] h-[2px] bg-white"></div>
              <div className="w-[30px] h-[2px] bg-white"></div>
            </div>
            <p className="text-white">Company</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Counter;
