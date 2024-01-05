import React, { useState } from 'react';
import LessonForm from "../Lessons/LessonForm.jsx";
import Button from "../../../components/Button.jsx";
import Lessons from "../Lessons/Lessons.jsx";
import Module from "./Module.jsx";
import ModuleForm from "./ModuleForm.jsx";
import { LayoutGroup } from "framer-motion";
import ConfirmModal from "../../../components/ConfirmModal.jsx";

const Modules = ({ course }) => {

    const [showForm, setShowForm] = useState(false);
    const [selectModule, setSelectModule] = useState({});

    const prepareNewForm = () => {
        setShowForm(true);
        setSelectModule({});
    }

    const prepareForEdit = (module) => {
        setSelectModule(module);
        setShowForm(true);
    }


    return (
        <div className={'pt-3 transition-all duration-1000'}>
            <ConfirmModal />
            <ModuleForm module={selectModule} courseId={course?.id} setShowForm={setShowForm} showForm={showForm} />
            <div className={'flex justify-end mb-3'}>
                <Button onClick={prepareNewForm}>Add Module</Button>
            </div>

            <LayoutGroup className={''}>
                {
                    course?.modules?.map((module) => (
                        <Module key={module.id} handleEdit={prepareForEdit} courseId={course.id} module={module} />
                    ))
                }
            </LayoutGroup>
        </div>
    );
};

export default Modules;
