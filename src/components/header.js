"use client"
import React from 'react';
import {usePathname} from "next/navigation";
// h-screen flex-grow flex justify-center bg-[url('/Resourses/back.png')] bg-cover bg-center
// {{isMainContentPage ? "Это вторая старица" : "Кирилл дура"}


const Header = () => {
    const pathname = usePathname();
    const isMainContentPage =  pathname ==="/mainContent";
    return (
        <div className="h-[40px] bg-white shadow-lg flex ">
            <div className={"w-1/2 h-full bg-#CFDFDF]"}>
            </div>
            <div className={"w-1/2 h-full bg-[#FFBFBF]"}>
                {isMainContentPage ? "Салон красоты" : "Авторизация в кабинет"}
            </div>
        </div>
    );
};
export default Header;