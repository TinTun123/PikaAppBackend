import React, {useState} from 'react';
import Button from "../../components/Button.jsx";
import CourseCard from "./CourseCard.jsx";

const Index = ({courses}) => {

    const [showForm,setShowForm] = useState(false);

    return (
        <>
            <div>
                <Button href={route('courses.create')} >Create Course</Button>
            </div>
            <div>
                {
                    courses.data.map(item=> (
                        <CourseCard key={item.id} course={item} />
                    ))
                }
            </div>
        </>
    );
};

export default Index;
