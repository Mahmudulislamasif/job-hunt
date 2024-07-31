import { FaPlusCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const Pricing = () => {
  return (
    <div className="container mx-auto my-6 px-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="border-[1px] border-[#e9e9e9] bg-white">
            <div className="py-10 px-10 flex flex-col gap-4 items-center">
              <h4 className="text-[20px] font-semibold">BASIC PLAN</h4>
              <div className="flex gap-1 items-center justify-center">
                <div className="w-[10px] h-[2px] bg-secondary"></div>
                <div className="w-[30px] h-[2px] bg-secondary"></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center my-10">
              <div className="w-full h-[2px] bg-[#e9e9e9]"></div>
              <div className="absolute bg-secondary rounded-3xl text-white flex items-center justify-center p-8 rotate-45">
                <h4 className="-rotate-45">OR</h4>
              </div>
            </div>
            <ul className="flex flex-col mt-20 gap-4 text-[20px] ">
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>5 Jobs Posting</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>2 Featured jobs</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>1 Renew Jobs</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>10 Days Duration</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>Email Alert</p>
              </li>
            </ul>

            <div className="my-10">
              {" "}
              <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2">
                <div>
                  <FaPlusCircle />
                </div>
                <div>
                  <h3>REGISTER AS A COMPANY</h3>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 relative group">
          <div className="border-[1px] border-[#e9e9e9] bg-white">
            <div className="w-[40px] h-[69px] bg-[#f1a835] right-0 mr-3 opacity-0 group-hover:opacity-100 absolute transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out clip-path-polygon-[0_0,_100%_0,_100%_100%,_50%_calc(100%_-_8px),_0_100%] flex items-center justify-center">
              <FaStar className="text-white transform transition-transform duration-500 ease-in-out group-hover:rotate-180" />
            </div>
            <div className="py-10 px-10 flex flex-col gap-4 items-center">
              <h4 className="text-[20px] font-semibold">BASIC PLAN</h4>
              <div className="flex gap-1 items-center justify-center">
                <div className="w-[10px] h-[2px] bg-secondary"></div>
                <div className="w-[30px] h-[2px] bg-secondary"></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center my-10">
              <div className="w-full h-[2px] bg-[#e9e9e9]"></div>
              <div className="absolute bg-secondary rounded-3xl text-white flex items-center justify-center p-8 rotate-45">
                <h4 className="-rotate-45">OR</h4>
              </div>
            </div>
            <ul className="flex flex-col mt-20 gap-4 text-[20px] ">
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>5 Jobs Posting</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>2 Featured jobs</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>1 Renew Jobs</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>10 Days Duration</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>Email Alert</p>
              </li>
            </ul>

            <div className="my-10">
              {" "}
              <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2">
                <div>
                  <FaPlusCircle />
                </div>
                <div>
                  <h3>REGISTER AS A COMPANY</h3>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="border-[1px] border-[#e9e9e9] bg-white">
            <div className="py-10 px-10 flex flex-col gap-4 items-center">
              <h4 className="text-[20px] font-semibold">BASIC PLAN</h4>
              <div className="flex gap-1 items-center justify-center">
                <div className="w-[10px] h-[2px] bg-secondary"></div>
                <div className="w-[30px] h-[2px] bg-secondary"></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center my-10">
              <div className="w-full h-[2px] bg-[#e9e9e9]"></div>
              <div className="absolute bg-secondary rounded-3xl text-white flex items-center justify-center p-8 rotate-45">
                <h4 className="-rotate-45">OR</h4>
              </div>
            </div>
            <ul className="flex flex-col mt-20 gap-4 text-[20px] ">
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>5 Jobs Posting</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>2 Featured jobs</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>1 Renew Jobs</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>10 Days Duration</p>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaPlusCircle />
                <p>Email Alert</p>
              </li>
            </ul>

            <div className="my-10">
              {" "}
              <button className="bg-secondary px-3 py-2 rounded-lg text-white flex items-center justify-center mx-auto gap-2">
                <div>
                  <FaPlusCircle />
                </div>
                <div>
                  <h3>Get Started</h3>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
