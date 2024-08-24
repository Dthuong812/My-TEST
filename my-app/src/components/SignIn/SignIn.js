import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../Logo/Logo";
import Buttons from "../button/Buttons";
import Input from "../input/Input";

const auths = "https://api-test-web.agiletech.vn/auth/login";
const SignIn = ({ setToken }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!username.trim()) {
            setError("Username cannot be empty");
            return;
        }
    
        setIsLoading(true);
        setError("");
    
        try {
            const response = await fetch(auths, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log( result);
                if (typeof setToken === 'function') {
                    setToken(result);
                } else {
                    console.error('setToken is not a function');
                }
                navigate('/home'); 
            } else {
                const result = await response.json();
                if (response.status === 401) {
                    setError(result.message || 'Login failed. Please check your credentials.');
                } else {
                    setError(result.message || 'An error occurred. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="mt-[60px] w-full max-w-[1120px] m-auto">
            <Logo />
            <div className="flex flex-col items-center justify-center w-full m-auto h-[400px]">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-[400] text-[64px] leading-[102px] text-black">Sign In</h1>
                </div>
                <form className="w-full max-w-[410px] mt-6" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="username">Username</label>
                    </div>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                    />
                    {error && (
                        <div className="relative px-4 py-3 mt-2 text-red-700">
                            <strong className="font-bold">Error: </strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                    <div className='w-full max-w-[413px] h-[59.63px] mt-6'>
                        <Buttons type="submit" disabled={isLoading} >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </Buttons>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignIn