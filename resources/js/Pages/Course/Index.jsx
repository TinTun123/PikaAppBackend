import React, { useState } from 'react';
import CourseCard from "./CourseCard.jsx";
import Paginator from '../../components/Paginator.jsx';
import Button from "../../components/Button.jsx";

const Index = ({ courses }) => {

    return (
        <>
            <div>
                <Button href={route('courses.create')}>Create Course</Button>
            </div>
            <div className="mt-4 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    courses.data.map(item => (
                        <CourseCard key={item.id} course={item} />
                    ))
                }
                <div className="col-span-full">
                    <Paginator links={courses.links} />
                </div>
            </div>
        </>
    );
};

export default Index;
