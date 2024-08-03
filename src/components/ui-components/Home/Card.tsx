import React from "react";
import { blog_img1 } from "../../../../public/assets/img/page";
import Image from "next/image";

const Card = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-12">
        <div className="col-span-9 border-[1px] border-gray-400">
          <Image
            src={blog_img1}
            width={870}
            height={400}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="col-span-3">Hello</div>
      </div>
    </div>
  );
};

export default Card;
