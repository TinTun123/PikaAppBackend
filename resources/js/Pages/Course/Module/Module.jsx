import React, { useState } from 'react';
import Lessons from "../Lessons/Lessons.jsx";
import Button from "../../../components/Button.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown } from "flowbite-react";
import { useForm } from "@inertiajs/react";
import ConfirmModal from "../../../components/ConfirmModal.jsx";


const Module = ({ module, courseId, handleEdit }) => {
    const [moduleOpen, setModuleOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const { delete: destroy } = useForm({});

    const deleteModule = () => {
        destroy(route('module.destroy', module?.id), {
            preserveScroll: true,
            onSuccess: () => {
                setDeleteModalOpen(false);
            }
        })
    }


    return (
        <motion.div layout layoutRoot>
            <ConfirmModal label="Are you sure you want to delete the module? Think twice dude!" onCancel={() => setDeleteModalOpen(false)} onConfirm={deleteModule} show={deleteModalOpen} />
            <div className={'flex bg-gray-50 p-2 my-2 items-center justify-between'}>
                <div className="flex items-center gap-2">
                    <button className={`transition-all hover:bg-primary hover:text-white rounded-full p-2 md:p-3 duration-300  ${moduleOpen ? 'rotate-90' : ''}`} onClick={() => setModuleOpen(!moduleOpen)}>
                        <FaAngleRight />
                    </button>
                    <h4 className={'font-medium text-sm line-clamp-3'}>Module {module.number} - {module.title}</h4>
                </div>
                <div className={'flex mr-2 items-center'}>
                    <Dropdown className={'bg-white'} label='' renderTrigger={() => (
                        <div className={'cursor-pointer'}>
                            <BsThreeDotsVertical />
                        </div>
                    )}>
                        <Dropdown.Item onClick={() => handleEdit({ ...module, videos: null })}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => setDeleteModalOpen(true)}>Delete</Dropdown.Item>
                    </Dropdown>

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


