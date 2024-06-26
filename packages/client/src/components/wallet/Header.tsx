import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../lib/auth";
import Dropdown from "./Dropdown";

const Header = ({ image }: { image: string }) => {
  return (
    <div className="w-full">
      <div className="py-5 px-12 flex justify-between w-full items-center">
        <div>
          <span className="text-[#FFE900] font-semibold text-[25px] md:text-[50px] font-satoshi">
            AI-FlowWallet
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {/* <div className='rounded-xl text-[15px] bg-[#FFE900] px-3 py-1 flex flex-col items-center justify-center'>Chat</div>
                <div className='rounded-xl text-[15px] bg-[#FFE900] px-3 py-1 flex flex-col items-center justify-center'>Transfer</div>
                <div className='rounded-xl text-[15px] bg-[#FFE900] px-3 py-1 flex flex-col items-center justify-center'>Swap</div>
                <div className='rounded-xl text-[15px] bg-[#FFE900] px-3 py-1 flex flex-col items-center justify-center'>Bridge</div> */}
        </div>
        <div className="flex space-x-20 items-center">
          <div className="">
            <Dropdown image={image!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
