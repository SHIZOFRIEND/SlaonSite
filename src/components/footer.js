import React from 'react';

const Footer = () => {
    return (
        <div className="h-[40px] bg-white shadow-lg relative flex">
            <div className="w-1/2 h-full bg-[#CFDFDF]"></div>
            <div className="w-1/2 h-full bg-[#FFBFBF]"></div>
            <div className="absolute inset-0 flex justify-center items-center">
                <a className="text-black text-2xl"  style={{fontFamily: "'Alex Brush', cursive"}}> Beauty Service 2024
                </a>
            </div>
        </div>
    );
};

export default Footer;