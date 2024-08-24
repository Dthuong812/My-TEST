import React from 'react';
import Buttons from '../button/Buttons';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';

const HeaderSignIn = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/sign-in'); 
    };
    return (
        <header className='flex w-full content-center items-center justify-between m-auto mt-[48px]'>
                <Logo/>   
            <div className='w-full max-w-[450px] h-[59.63px]  grid grid-cols-2 gap-10 cursor-pointer'>
                <Buttons onClick={() => navigate('/profile')}>Profile</Buttons>
                <Buttons onClick={handleLogout} >Logout</Buttons>
            </div>
        </header>
    );
};

export default HeaderSignIn;
