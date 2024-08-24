import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        const tokenData = localStorage.getItem('token');
        if (tokenData) {
            navigate('/home');
        } else {
            navigate('/');
        }
    };

    return (
        <div className='flex items-end cursor-pointer' onClick={handleClick}>
            <span className='w-[19.88px] h-[19.88px] bg-[#9C69E2] rounded-full'></span>
            <span className='w-[19.88px] h-[34.78px] bg-[#F063B8] rounded-[20px] ml-2'></span>
        </div>
    );
};

export default Logo;
