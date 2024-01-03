import React, {useState} from 'react';
import LessonForm from "../Lessons/LessonForm.jsx";
import Button from "../../../components/Button.jsx";
import Lessons from "../Lessons/Lessons.jsx";
import Module from "./Module.jsx";
import ModuleForm from "./ModuleForm.jsx";
import {LayoutGroup} from "framer-motion";

const Modules = ({course}) => {

    const [showForm, setShowForm] = useState(false);

    const prepareNewForm = () => {
        setShowForm(true);
    }

    return (
        <div className={'pt-3 transition-all duration-1000'}>
            <ModuleForm courseId={course?.id} setShowForm={setShowForm} showForm={showForm}/>
            <div className={'flex justify-end mb-3'}>
                <Button onClick={prepareNewForm}>Add Module</Button>
            </div>

            <LayoutGroup className={''}>
                {
                    course?.modules?.map((module) => (
                        <Module key={module.id} courseId={course.id} module={module}/>
                    ))
                }
            </LayoutGroup>
        </div>
    );
};

export default Modules;
