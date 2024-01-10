import React, {useState} from 'react';
import Button from "../../components/Button.jsx";
import CourseCard from "./CourseCard.jsx";

const Index = ({courses}) => {

    return (
        <>
            <div>
                <Button href={route('courses.create')}>Create Course</Button>
            </div>
            <div className="mt-4 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    courses.data.map(item => (
                        <CourseCard key={item.id} course={item}/>
                    ))
                }
            </div>
        </>
    );
};

export default Index;
