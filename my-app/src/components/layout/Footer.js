import React from "react";
import Buttons from '../button/Buttons';
import Logo from "../Logo/Logo";

const Footer = () =>{
    return(
        <div className="mt-[100px] mb-8">
            <hr />
            <div className="mt-[100px] grid grid-cols-3 ">
                <div>
                    <div className="flex items-center justify-start">
                        <Logo/>
                        <span className="font-title font-[900] text-[20px] leading-8 text-secondary ml-4">DataWarehouse</span>
                    </div>
                    <div className="mt-[50px] font-title font-[500] text-[16px] leading-7 text-secondary pb-5">
                        <p className="">Warehouse Society, 234</p>
                        <p> Bahagia Ave Street PRBW 29281</p>
                        <p className="font-[400] mt-5">info@warehouse.project</p>
                        <p className="font-[400]"> 1-232-3434 (Main)</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 col-span-2">
                    <div className="flex flex-col items-center ">
                        <span className="font-title font-[900] text-[16px] leading-8 text-secondary ">About</span>
                        <ul className="mt-[40px] font-[400] text-secondary text-[16px] leading-7">
                            <li className="m-3">Profile</li>
                            <li className="m-3">Features</li>
                            <li className="m-3">Careers</li>
                            <li className="m-3">DW News</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center ">
                        <span className="font-title font-[900] text-[16px] leading-8 text-secondary">Help</span>
                        <ul className="mt-[40px] font-[400] text-secondary text-[16px] leading-10 ">
                            <li className="m-3">Support</li>
                            <li className="m-3">Sign up</li>
                            <li className="m-3">Guides</li>
                            <li className="m-3">Reports</li>
                            <li className="m-3">Q&A</li>
                        </ul>
                    </div>
                    <div className="flex flex-col ">
                        <span className="font-title font-[900] text-[16px] leading-8 text-secondary flex justify-center">Social Media</span>
                        <ul className="flex mt-[40px] justify-end">
                            <li className="w-10 h-10 p-3 rounded-full bg-[#e9e9ee] m-3  items-center justify-center flex"><i class="fa-brands fa-youtube"></i></li>
                            <li className="w-10 h-10 p-3 rounded-full bg-[#e9e9ee] m-3  items-center justify-center flex"><i class="fa-brands fa-instagram"></i></li>
                            <li className="w-10 h-10 p-3 rounded-full bg-[#e9e9ee] m-3  items-center justify-center flex"><i class="fa-brands fa-github"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <div>
                    <p className="font-[400] font-title text-xs text-secondary leading-5">© Datawarehouse™, 2020. All rights reserved.<br></br>
                        Company Registration Number: 21479524.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#e9e9ee] flex items-center justify-center">
                <Buttons 
                    bgColor="bg-black" 
                    icon={<i className="fa-solid fa-message" style={{ color: '#9E2C69', margin: "0" }} />}
                />
                </div>

            </div>
        </div>
    );
} 
export default Footer