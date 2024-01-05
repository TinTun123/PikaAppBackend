import React, { useState } from 'react';
import Button from "../../../components/Button.jsx";
import LessonForm from "./LessonForm.jsx";
import LessonCard from "./LessonCard.jsx";
import Paginator from "../../../components/Paginator.jsx";
import { GoPlus } from "react-icons/go";


const Lessons = ({ courseId, lessons, moduleId }) => {

    const [showForm, setShowForm] = useState(false);
    const [currentLesson, setCurrentLesson] = useState(null);

    const prepareNewForm = () => {
        setCurrentLesson(null);
        setShowForm(true);
    }

    const prepareForEdit = (lesson) => {
        setShowForm(true);
        setCurrentLesson(lesson);
    }

    return (
        <div className={'p-3  min-h-[300px] border border-dashed '}>
            <LessonForm moduleId={moduleId} latestLessonNumber={lessons?.[lessons?.length - 1]?.number ?? 0} courseId={courseId} setShowForm={setShowForm} showForm={showForm} lesson={currentLesson} />
            <div className={'flex justify-end p-2 mb-2'}>
                <Button outline onClick={prepareNewForm}><GoPlus /></Button>
            </div>
            <div className={'grid grid-cols-1 lg:grid-cols-3 gap-3'}>
                {
                    lessons.map(item => (
                        <LessonCard handleEdit={prepareForEdit} lesson={item} key={item.id} />
                    ))
                }
            </div>
        </div>

    );
};

export default Lessons;
