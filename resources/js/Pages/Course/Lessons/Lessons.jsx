import React, {useState} from 'react';
import Button from "../../../components/Button.jsx";
import LessonForm from "./LessonForm.jsx";
import LessonCard from "./LessonCard.jsx";

const Lessons = ({courseId, lessons}) => {

    const [showForm, setShowForm] = useState(false);
    const [currentLesson, setCurrentLesson] = useState(null);

    const prepareNewForm = () => {
        setShowForm(true);
    }

    const prepareForEdit = (lesson) => {
        console.log(lesson);
        setShowForm(true);
        setCurrentLesson(lesson);
    }

    return (
        <div className={'pt-3'}>
            <LessonForm courseId={courseId} setShowForm={setShowForm} showForm={showForm} lesson={currentLesson}/>
            <div className={'flex justify-between items-center'}>
                <h4 className={'font-medium text-lg'}>Lessons Section</h4>
                <Button onClick={prepareNewForm}>Add Lesson</Button>
            </div>

           <div className={'grid grid-cols-3 '}>
               {
                   lessons.data.map(item => (
                       <LessonCard handleEdit={prepareForEdit} lesson={item} key={item.id} />
                   ))
               }
           </div>

        </div>

    );
};

export default Lessons;
