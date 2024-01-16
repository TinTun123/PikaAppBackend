import React, {useState} from 'react';
import {Link, router, useForm} from "@inertiajs/react";
import Dropdown from "../../components/common/Dropdown";
import {BsThreeDotsVertical} from "react-icons/bs";
import {SlBadge} from "react-icons/sl";
import ConfirmModal from "../../components/ConfirmModal.jsx";

const CourseCard = ({course}) => {


    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const {processing, delete: destroy} = useForm({});

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


    const handleDelete = () => {
        destroy(route('courses.destroy', course.id), {
            preserveScroll: true,
        })
    };


    return (
        <div className={' w-full p-4  relative bg-white rounded-lg '}>

            <ConfirmModal show={openDeleteModal} onConfirm={handleDelete} loading={processing}
                          onCancel={() => setOpenDeleteModal(false)}/>

            <div className={'bg-gray-100 bg-opacity-90 rounded-lg p-1 mt-1 ml-2 absolute '}>
                {course.category.name}
            </div>
            {
                course.recommended ?
                    <div className={'absolute text-white p-3 bg-primary top-0 left-[45%] shadow-xl rounded-full '}>
                        <SlBadge/>
                    </div> : null
            }

            {
                course.popular ?
                    <div className={'absolute text-white p-1.5 bg-primary top-0 right-0 rounded-full '}>
                    </div> : null
            }
            <img className={'h-[200px] w-full object-cover rounded-lg '} src={course.image} alt=""/>
            <div className={'flex flex-col gap-5 w-full justify-between'}>
                <div className={'flex justify-between mt-2'}>
                    <p className={'bg-gray-100 text-sm py-1 px-2 rounded-lg '}>{course.modules_count} modules</p>
                    <p className={'bg-gray-100 text-sm py-1 px-2 rounded-lg '}>{course.lessons_count} lessons</p>
                    <p className={'bg-gray-100 text-sm py-1 px-2 rounded-lg '}>{course.students_count} users</p>
                </div>
                <div>
                    <h3 className={'font-medium text-lg mb-2'}>{course.title}</h3>
                </div>
                <div className={'flex justify-between items-center'}>
                    <p className={'text-sm font-medium'}>{(+course.fee).toLocaleString('en-US')} mmk</p>
                    <div className={'flex gap-5'}>
                        <Dropdown className={'!bg-white'} label='' renderTrigger={() => (
                            <div className={'cursor-pointer'}>
                                <BsThreeDotsVertical/>
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
                                           onClick={()=> setOpenDeleteModal(true)}>Delete</Dropdown.Item>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
