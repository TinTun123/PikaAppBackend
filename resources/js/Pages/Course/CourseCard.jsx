import React from 'react';
import {Link} from "@inertiajs/react";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import { formatPrice } from '../../Global/Methods';

const CourseCard = ({course,handleDeleteModal}) => {
    return (
        <div className={' w-full p-4 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-5'}>
            <img className={'h-[200px] w-[400px] object-cover '} src={course.image} alt="" />
                <div className={'flex flex-col gap-5 w-full justify-between'}>
                    <div>
                        <h3 className={'font-semibold text-xl mb-2'}>{course.title}</h3>
                        <p>{course.description}</p>
                        <p>Instructor: <strong>{course.instructor}</strong></p>
                        <p>Price: <strong>{formatPrice(course.price)}</strong></p>
                    </div>
                <div className={'flex justify-end'}>
                    <div className={'flex gap-5'}>
                        <Link href={route('courses.edit', course.id)} className={'text-2xl '}>
                            <AiOutlineEdit />
                        </Link>
                        <button onClick={()=> handleDeleteModal(course.id)} className={'text-2xl text-primary'}>
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
