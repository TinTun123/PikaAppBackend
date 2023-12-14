import React from 'react'
import Button from "./Button.jsx";
import DynamicComponent from "./DynamicComponent.jsx";
import {Link} from "@inertiajs/react";

const Paginator = ({links}) => {
    const redesign = (label, nickname) => {
        return label.includes(nickname);
    }
    return (
        <>
            {links?.length > 3 &&
                <div
                    className="
                        flex-wrap
                        paginator
                        flex
                        items-center
                        justify-end
                        space-x-1
                        mt-2
                        p-3
                        "
                >
                    {
                        links?.map(link => (
                            <DynamicComponent
                                key={link.label}
                                Component={link?.url ? null : null}
                                href={link.url}
                                className={'!px-0 !py-0 !rounded-md bg-white !text-black !w-[40px] flex hover:bg-none border-none justify-center items-center !h-[40px] '}
                                preserveState={true}
                                preserveScroll={true}
                            >
                                {
                                    redesign(link.label, 'Previous') ? <Link
                                            className={`hidden w-10 h-10 space-x-2 rounded-md sm:items-center justify-center border-[1px] border-gray-200 sm:flex ${!link.url ? 'cursor-not-allowed pointer-events-none opacity-40' : ''}`}
                                            disabled={!link.url}
                                            href={link.url}
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                        </Link>
                                        : redesign(link.label, 'Next') ? <Link
                                                className={`hidden w-10 h-10 border-[1px] rounded-md border-gray-200 space-x-2 sm:items-center justify-center sm:flex ${!link.url ? 'cursor-not-allowed pointer-events-none opacity-40' : ''}`}
                                                disabled={!link.url}
                                                href={link.url}
                                            >
                                                <svg
                                                    className="h-4 w-4 rotate-180"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 19l-7-7 7-7"
                                                    />
                                                </svg>
                                            </Link>
                                            :
                                            <Link href={link.url}
                                                  className={`w-10 h-10 border-[1px] flex justify-center items-center border-gray-200 rounded-md text-sm  transition-all duration-150 ${link.active ? 'bg-primary text-white' : ''}`}
                                            >{link.label}</Link>
                                }
                            </DynamicComponent>
                        ))
                    }
                </div>
            }
        </>


    )
}

export default Paginator
