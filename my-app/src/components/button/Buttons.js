import React from 'react';

const Buttons = ({onClick ,className, type= "button",bgColor = "button",textAlign = "text-center",margin= "m-2",children,icon,...props}) =>{
    let textColor = bgColor === 'button' ? 'text-white' : 'text-button'; 

    return (
        <button
        type ={type}
        onClick={onClick}
        className={`w-full h-full rounded-[50px] cursor-pointer text-base font-bold bg-${bgColor} ${textAlign} ${textColor} ${className}`} {...props}
        >
        {children}
        {icon && <span className={` ${textAlign} ${margin} ${className}`}>{icon}</span>}
        </button>
    )
}
export default Buttons