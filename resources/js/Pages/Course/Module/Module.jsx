import React, { useState } from 'react';
import Lessons from "../Lessons/Lessons.jsx";
import Button from "../../../components/Button.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Module = ({ module, courseId }) => {
    const [moduleOpen, setModuleOpen] = useState(false);

    return (
        <motion.div layout layoutRoot className={''}>
            <div className={'flex bg-gray-100 p-2 my-2 items-center justify-between'}>
                <h4 className={'font-medium text-lg'}>Module {module.id} - {module.title}</h4>
                <div className={'flex '}>
                    <Button onClick={() => setModuleOpen(!moduleOpen)}>+</Button>
                </div>
            </div>
            <AnimatePresence>
                {
                    moduleOpen &&
                    <motion.div
                        layout
                        initial={{ height: '0px' }}
                        animate={{ height: 'auto' }}
                        exit={{ height: '0px', opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Lessons lessons={module.videos} moduleId={module.id} courseId={courseId} />
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    );
};


export default Module;


