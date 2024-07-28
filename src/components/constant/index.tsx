import { FaCode } from "react-icons/fa";
import { CiLaptop } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { GrCube } from "react-icons/gr";
import { title_img1,title_img2,title_img3 } from "../../../public/assets/logo/page";
export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "clients",
      title: "Clients",
    },
  ];
export const featureJobs=[
    {
      id: "1",
      icon: <FaCode/>,
      title:"Developer",
      totalJobs:"240 jobs"
    },
    {
      id: "2",
      icon: <CiLaptop/>,
      title:"Technology",
      totalJobs:"504 jobs"
    },
    {
      id: "3",
      icon:<IoStatsChart/>,
      title:"Acconting",
      totalJobs:"2250 jobs"
    },
    {
      id: "4",
      icon:<FaSuitcaseMedical/>,
      title:"Medical",
       totalJobs:"202 jobs"
    },
    {
      id: "5",
      icon:<BsBank2/>,
      title:"Government",
       totalJobs:"1457 jobs"
    },
    {
      id: "6",
      icon:<GrCube/>,
      title:"All Jobs",
       totalJobs:"2000+ jobs"
    },
  ]
export const trandingJobs=[
    {
      id: "7",
      icon: title_img1,
      desination:"Graphics Designer",
      totalJobs:"Webstrot Pvt. Ltd"
    },
    {
      id: "8",
      icon: title_img2,
      desination:"Graphics Designer",
      totalJobs:"Webstrot Pvt. Ltd"
    },
    {
      id: "9",
      icon:title_img3,
      desination:"Graphics Designer",
      totalJobs:"Webstrot Pvt. Ltd"
    }
  ]