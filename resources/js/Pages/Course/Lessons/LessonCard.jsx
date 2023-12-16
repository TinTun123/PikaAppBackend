import React, {useState} from 'react';
import {Dropdown} from "flowbite-react";
import {BsThreeDotsVertical} from "react-icons/bs";
import ConfirmModal from "../../../components/ConfirmModal.jsx";
import {useForm} from "@inertiajs/react";

const LessonCard = ({lesson, handleEdit}) => {

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [currentLesson, setCurrentLesson] = useState(null);

    const {delete : deleteMethod} = useForm({});

    const openDeleteModal = (currentLesson) => {
        setCurrentLesson(currentLesson);
        setConfirmModalOpen(true);
    }


    const deleteLesson = () => {
        deleteMethod(route('lessons.destroy', currentLesson?.id),{
            preserveScroll : true,
            onSuccess : () => {
                setConfirmModalOpen(true);
            }
        })
    }

    return (
        <div>
            <ConfirmModal onCancel={()=> setConfirmModalOpen(false)} onConfirm={deleteLesson} show={confirmModalOpen} />
            <div className={'group'}>
                {/*800946029*/}
                {/*894419244*/}

                <div className="relative p-32">
                    <iframe
                        src={`https://player.vimeo.com/video/${lesson.video}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                        className="absolute top-0 left-0 w-full h-full"></iframe>
                </div>
                <div className={'flex mt-3'}>
                    <div className={'w-full'}>
                        <p className={'font-medium text-sm'}>{lesson.title}</p>
                        <p className={'text-[12px]'}>Lesson - <span className={'font-semibold'}>{lesson.number}</span>
                        </p>
                    </div>
                    <Dropdown className={'bg-white'} label='' renderTrigger={() => (
                        <div className={'cursor-pointer'}>
                            <BsThreeDotsVertical/>
                        </div>
                    )}>
                        <Dropdown.Item onClick={() => handleEdit(lesson)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => openDeleteModal(lesson)}>Delete</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default LessonCard;
