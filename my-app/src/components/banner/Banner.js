import React from "react";
import Buttons from "../button/Buttons";

const Banner = () =>{
    return (
        <div className="w-full content-center items-center justify-between m-auto mt-[48px]">
            <div className="w-full max-w-[640px]">
                <h1 className="font-bold text-[80px] leading-[88px] text-[#212353] font-body ">Save your data storage here.</h1>
                <p className="w-full max-w-[370px] text-[18px] leading-[28.8px] mt-[50px] font-[500] text-[#4B5D68] font-title">Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.</p>
                <div className="w-full max-w-[208px] h-[60px] mt-[50px] font-title">
                    <Buttons>Learn more</Buttons>
                </div>
            </div>
            <div className="w-full max-w-[760px] flex ml-auto mt-[-340px] animate-fade-left animate-delay-1000 "> 
                <img src="banner.png" className="w-full " alt="banner" />
            </div>
        </div>
    )
}
export default Banner;

