import React, {useEffect, useState} from 'react';
import links from "./Links";
import {Link, usePage} from "@inertiajs/react";
import {HiOutlineBars3BottomLeft} from "react-icons/hi2";
import {showSuccessToast} from "../Global/Methods.js";
import DynamicIcons from "../components/DynamicIcons.jsx";

const AdminSideBar = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="adminlayout bg-gray-100 min-h-screen flex flex-col">
            <div
                className={'fixed z-40 inset-0 bg-black/50 transition-opacity ' + [isOpen ? 'opacity-100 select-auto pointer-events-auto' : 'opacity-0 select-none pointer-events-none']}
                onClick={() => setIsOpen(false)}
            />

            <aside
                className={"admin-sidebar bg-white border-r flex flex-col justify-between w-[80%] pb-1 fixed z-40 h-screen overflow-hidden transition-all duration-300 tablet:w-[50%] md:z-10 md:left-0 md:w-[259px] " + [isOpen ? 'left-0' : '-left-full']}
            >
                <div>
                    <div
                        className="p-3"
                    >
                        <a href={'/'} className={'w-full'}>
                            Logo
                            {/*<img className={'w-[70px] mx-auto'} src={Logo} alt=""/>*/}
                        </a>
                    </div>

                    <ul
                        className="admin-sidenav space-y-2 pl-3 pr-2 overflow-auto custom-scrollbar"
                    >
                        {links.map(link => (
                            <li key={link.title}>
                                <Link
                                    href={route('home')}
                                    className={`text-[15px] cursor-pointer flex gap-2 w-full px-4 py-3 transition hover:bg-secondary ${window.location.href === route('home') && 'border-l-4 border-primary'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <DynamicIcons name={link.icon} className="w-5 h-5"/>
                                    <span className="truncate">
        {link.title}
            </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="px-3">
                    <button
                        onClick={() => console.log('logout')}
                        className="!w-full !bg-rose-100 !text-rose-500 !text-[17px] font-medium hover:!bg-rose-500 hover:!text-white"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            <div
                className="mobile-navbar bg-white shadow-sm h-[69px] flex items-center justify-between fixed z-10 w-full top-0 px-4 py-2 md:hidden">
                <div
                    className="w-6 h-6 cursor-pointer text-2xl"
                    onClick={() => setIsOpen(true)}
                >
                    <HiOutlineBars3BottomLeft/>
                </div>
            </div>

            <main className="primary-content flex-1 p-4 pb-8 mt-[69px] overflow-hidden md:ml-[259px] md:mt-0">

                {children}
            </main>

        </div>
    );
};

export default AdminSideBar;
