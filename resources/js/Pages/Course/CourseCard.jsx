import React from 'react';
import { Link, router } from "@inertiajs/react";
import Dropdown from "../../components/common/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";

const CourseCard = ({ course, handleDeleteModal }) => {


    const handleTogglePopular = () => {
        router.post(route('courses.togglePopular', course.id), {}, {
            preserveScroll: true,
        });
    }

    const handleToggleRecommended = () => {
        router.post(route('courses.toggleRecommended', course.id), {}, {
            preserveScroll: true,
        });
    }


    return (
        <div className={' w-full p-4  relative bg-white rounded-lg cursor-pointer'}>
            <div className={'bg-gray-100 bg-opacity-90 rounded-lg p-1 mt-1 ml-2 absolute '}>
                {course.category.name}
            </div>
            {
                course.popular ?
                    <div className={'absolute text-white p-3 bg-yellow-400 top-0 right-0 rounded-full '}>
                        <SlBadge />
                    </div> : null
            }
            <img className={'h-[200px] w-full object-cover rounded-lg '} src={course.image} alt="" />
            <div className={'flex flex-col gap-5 w-full justify-between'}>
                <div className={'flex justify-between mt-2'}>
                    <p className={'bg-gray-100 text-sm py-1 px-2 rounded-lg '}>{course.modules_count} modules</p>
                    <p className={'bg-gray-100 text-sm py-1 px-2 rounded-lg '}>24h 10m</p>
                    <p className={'bg-gray-100 text-sm py-1 px-2 rounded-lg '}>321 Participant</p>
                </div>
                <div>
                    <h3 className={'font-medium text-lg mb-2'}>{course.title}</h3>
                </div>
                <div className={'flex justify-between items-center'}>
                    <p className={'text-sm font-medium'}>{(+course.price).toLocaleString('en-US')} mmk</p>
                    <div className={'flex gap-5'}>
                        <Dropdown className={'!bg-white'} label='' renderTrigger={() => (
                            <div className={'cursor-pointer'}>
                                <BsThreeDotsVertical />
                            </div>
                        )}>
                            <Dropdown.Item className={'hover:!bg-gray-100 !text-black'}
                                onClick={() => handleTogglePopular(course.id)}>
                                {course.popular ? 'Remove from popular' : 'Add to popular'}
                            </Dropdown.Item>
                            <Dropdown.Item className={'hover:!bg-gray-100 !text-black'}
                                onClick={() => handleToggleRecommended(course.id)}>
                                {course.recommended ? 'Remove from recommended' : 'Add to recommended'}
                            </Dropdown.Item>
                            <Dropdown.Item
                                className={'hover:!bg-gray-100 !text-black'}
                                onClick={() => router.get(route('courses.edit', course.id))}>Edit</Dropdown.Item>
                            <Dropdown.Item className={'hover:!bg-gray-100 !text-black'}
                                onClick={() => handleDeleteModal(course.id)}>Delete</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
