import React, {useState} from 'react';
import {BsThreeDotsVertical} from "react-icons/bs";
import ConfirmModal from "../../../components/ConfirmModal.jsx";
import {useForm} from "@inertiajs/react";
import {MdOndemandVideo, MdInfoOutline, MdOutlinePodcasts} from "react-icons/md";
import Dropdown from "../../../components/common/Dropdown.jsx";
import Modal from "../../../components/Modal.jsx";
import { IoMdClose } from "react-icons/io";


const LessonCard = ({lesson, handleEdit}) => {

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [detailModalOpen, setDetailModalOpen] = useState(false);


    const {delete: deleteMethod} = useForm({});

    const openDeleteModal = () => {
        setConfirmModalOpen(true);
    }


    const deleteLesson = () => {
        deleteMethod(route('lessons.destroy', lesson?.id), {
            preserveScroll: true,
            onSuccess: () => {
                setConfirmModalOpen(true);
            }
        })
    }


    console.log(lesson);

    return (
        <div>
            <Modal show={detailModalOpen} onClose={() => setDetailModalOpen(false)}>
                <div>
                    <div>
                        <IoMdClose onClick={()=>setDetailModalOpen(false)} className={'bg-gray-100 text-4xl cursor-pointer rounded-full p-1 ml-auto mb-5'} />
                    </div>

                    {
                        lesson.type === 'podcast' ?
                            <audio className={'w-full mb-3'} controls>
                                <source src={lesson.playable_file} type="audio/mp3"/>
                            </audio>:  null
                    }

                    {
                        lesson.type === 'video' ?
                            <div className="relative aspect-video w-full mb-3">
                                <iframe
                                    src={`https://player.vimeo.com/video/${lesson.file}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                                    allow="autoplay; fullscreen; picture-in-picture" width={426} height={240}
                                    frameBorder="0" data-ready='true' style={{width: '100%', height: '100%'}}></iframe>
                            </div> : null
                    }

                    <div className={'shadow p-5 rounded-md'}>
                        <h3 className={'text-lg font-semibold'}>{lesson.number_as_text} - {lesson.title}</h3>
                        <p className={'text-sm font-semibold my-2'}>Lesson - {lesson.number}</p>
                        <p>{lesson.description}</p>
                    </div>

                </div>
            </Modal>
            <ConfirmModal onCancel={() => setConfirmModalOpen(false)} onConfirm={deleteLesson} show={confirmModalOpen}/>
            <div className={'border p-3 h-[250px] lg:h-[200px] flex flex-col justify-between'} onClick={() => console.log('hello world click')}>
                <div>
                    <h4 className={'font-semibold truncate'}>{lesson.title}</h4>
                    <p className={'text-sm font-medium my-2'}>Lesson - {lesson.number}</p>
                    <p className={'text-sm line-clamp-3 '}>{lesson.description}</p>
                </div>

                <div className={'flex justify-between mt-3'}>
                    <div className={''}>

                        {
                            lesson.type === 'video' ?
                                <MdOndemandVideo className={'text-2xl text-primary'}/>
                                :
                                <MdOutlinePodcasts className={'text-2xl text-primary'}/>
                        }
                    </div>
                    <div className={'cursor-pointer '} onClick={()=> setDetailModalOpen(true)}>
                        <MdInfoOutline className={'text-2xl '}/>
                    </div>
                    <Dropdown className={'bg-white'} label='' renderTrigger={() => (
                        <div className={'cursor-pointer'}>
                            <BsThreeDotsVertical/>
                        </div>
                    )}>
                        <Dropdown.Item onClick={() => handleEdit(lesson)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={openDeleteModal}>Delete</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default LessonCard;
