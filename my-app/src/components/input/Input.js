import React from "react";

const Input =({placeholder,className,type="text",...props}) =>{
    return (
        <div className="">
            <input className={`w-full py-2 pl-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200 ${className}`} type={type}  placeholder={placeholder} {...props}/>
        </div>
    )
}
export default Input