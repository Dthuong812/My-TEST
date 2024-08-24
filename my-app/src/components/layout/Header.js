import React from 'react';
import Buttons from '../button/Buttons';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='flex w-full content-center items-center justify-between m-auto mt-[48px]'>
                <Logo/>   
            <div className='w-full max-w-[208.7px] h-[59.63px] '>
                <Buttons onClick={() => navigate('/sign-in')}>Sign In</Buttons>
            </div>
        </header>
    );
};

export default Header;
