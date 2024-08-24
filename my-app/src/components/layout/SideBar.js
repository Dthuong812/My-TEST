import React from "react";
import Logo from "../Logo/Logo";
import { useNavigate } from 'react-router-dom';

const SideBar =() =>{
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full h-screen pt-8 bg-slate-200">
            <div className="mx-auto mb-8">
                <Logo/>
            </div>
            <ul className="px-8 font-title font-[400] left-8 text-[20px] text-secondary cursor-pointer">
                <li onClick={() => navigate('/profile')} className="py-5" >Posts</li>
                <li onClick={() => navigate('/')}>Logout</li>
            </ul>
        </div>
      );
}
export default SideBar