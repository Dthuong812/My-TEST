import React from "react";
import Buttons from "../button/Buttons";

const contents = [
    {
        title: "Search Data",
        desc: "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.",
        image: "/content1.png",
        bg: "/bg1.png"
    },
    {
        title: "24 Hours Access",
        desc: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
        image: "/content2.png",
        bg: "/bg2.png"
    },
    {
        title: "Print Out",
        desc: "Print out service gives you convenience if someday you need to print data, just edit it all and just print it.",
        image: "/content3.png",
        bg: "/bg3.png"
    },
    {
        title: "Security Code",
        desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
        image: "/content4.png",
        bg: "/bg4.png"
    }
];

const ContentDetail = () => {
    const list = contents.map((content, index) => {
        return (
            <div key={index} className="flex items-center content-center h-[380px] bg-no-repeat bg-right"
            style={{
                        backgroundImage: `url(${content.bg})`,
                    }}>
                <div className="w-full max-w-[40%]">
                    <img src={content.image} alt={content.title} className="w-full" />
                </div>
                <div
                    className="pl-8 pr-4 w-full max-w-[50%] bg-cover bg-center text-start font-[400] ">
                    <h2 className="mb-5 text-2xl font-body text-secondary">{content.title}</h2>
                    <p className="mb-5 leading-7 text-para">{content.desc}</p>
                    <div className="">
                    <Buttons bgColor="bg-black" textAlign="text-left" icon={<i className="fa-solid fa-arrow-right" style={{ color: '#9c69e2' }} />}>
                            Learn more
                    </Buttons>

                    </div>
                </div>
            </div>

        );
    });

    return <div className="w-full grid grid-rows-2 grid-cols-2 gap-10 m-auto mt-[100px]">{list}</div>;
};

export default ContentDetail;
