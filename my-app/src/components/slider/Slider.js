import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const galleries ="https://api-test-web.agiletech.vn/galleries"
const Slider =()=>{
   const [data,setData] = useState([]) ;
   const [loading,setLoading] = useState(true)
   const [error,setError] = useState(null)

   useEffect(()=>{
        getList()
            .then(data=> {
                setData(data);
                setLoading(false);
            })
            .catch(error =>{
                setError(data);
                setLoading(false);
            })
   },[data]);
   if(loading) return <div>Loading...</div>;
   if(error) return <div> Error :{error.message}</div>;

   const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: { clickable: true },
    autoplay: { delay: 3000 },
};


return (
    <div className="mt-[120px] bg-button rounded-[50px] p-[100px]">
        <h2 className="font-bold font-body text-[40px] leading-[50px] text-white">Testimonials</h2>
        <Swiper {...swiperSettings}>
            {data.map((item, index) => (
                <SwiperSlide>
                    <div className="text-black bg-white shadow-lg shadow-indigo-500 rounded-[20px] p-5 mt-[50px] m-auto h-[300px] w-full max-w-[900px] flex"> 
                         <div className="flex flex-col items-center w-full max-w-[25%] arounded-full  ">
                            <img src={item.imageUrl} alt="" className="w-full h-auto mb-4 rounded-md"/>
                        </div>
                        <div  className="w-full max-w-[75%] items-center flex m-auto pr-10 pl-5">
                            <p className="text-title font-[18px] leading-8">{item.desctiption}</p>
                        </div>
                        </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
};

async function getList() {
    try {
        const response = await fetch(galleries);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
    } catch (error) {
        throw error; 
    }
}


export default Slider;
