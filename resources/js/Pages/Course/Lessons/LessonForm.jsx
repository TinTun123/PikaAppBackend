import React, {useEffect} from 'react';
import Modal from "../../../components/Modal.jsx";
import Input from "../../../components/Input.jsx";
import {useForm} from "@inertiajs/react";
import Button from "../../../components/Button.jsx";
import Textarea from "../../../components/Textarea.jsx";
import AudioUploader from "../../../components/AudioUploader.jsx";
import axios from "axios";
import error from "../../../components/Error.jsx";

const LessonForm = ({showForm, setShowForm, lesson, latestLessonNumber, courseId, moduleId}) => {

    const {data, setData, errors, post, clearErrors, processing} = useForm(lesson ?? {
        course_id: courseId,
        module_id: moduleId,
        number: latestLessonNumber + 1
    });

    console.log(data);
    useEffect(() => {
        if (lesson?.title) {
            setData(lesson);
        }
    }, [lesson])

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = lesson ? route('lessons.update', lesson.id) : route('lessons.store');
        post(url, {
            preserveScroll: true,
            onSuccess: () => {
                setShowForm(false);
                setData({
                    course_id: courseId,
                    module_id: moduleId,
                    number: latestLessonNumber + 1
                });
            }
        })
    }

    const handleUploadSuccess = (response) => {
        console.log(response);
        setData(pre => ({...pre, file: response.path, playable_file: response.playable_file}))
    }

    useEffect(() => {
        if (!showForm) {
            clearErrors();
        }
        if (!lesson) {
            setData(pre => ({...pre, title: '', description: '', number: latestLessonNumber + 1, video: ''}))
        }
    }, [showForm])


    const removePodcast = async (path) => {
        try {
            const res = await axios.post(route('podcast.remove'), {path})
            setData(pre => ({...pre, file: null, playable_file: null, time: 0}));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Modal show={showForm} onClose={() => setShowForm(false)}>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-3'}>
                <Input value={data?.title ?? ''} onChange={e => setData('title', e.target.value)} label={'Title'}
                       error={errors.title}/>
                <div className="flex flex-col gap-2">
                    <p className={'font-medium'}>Type</p>
                    <div className="flex items-center gap-3">
                        {
                            ['video', 'podcast'].map(type => (
                                <div key={type} onClick={() => setData(pre => ({...pre, type, file: null}))}
                                     className={`w-full cursor-pointer border transition-all text-center p-2 ${type === data.type ? 'border border-primary' : ''}`}> {type} </div>
                            ))
                        }
                    </div>
                    <p className={'text-red-500 text-sm'}>{errors.type ?? ''}</p>
                </div>

                {
                    data?.type === 'video' ?
                        <Input value={data?.file ?? ''} onChange={e => setData('file', e.target.value)}
                               label={'Vimeo ID'}
                               error={errors.file}/> : null
                }

                {
                    !data.playable_file && data.type === 'podcast' &&
                    <AudioUploader handleUploadSuccess={handleUploadSuccess}/>
                }
                <p className={'text-red-500 text-sm'}>{(data.type === 'podcast' && errors.file) ?? ''}</p>

                {
                    data.playable_file &&
                    <>
                        <audio className={'w-full'} controls>
                            {/* http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3 */}
                            <source src={data.playable_file} type="audio/mp3"/>
                        </audio>
                        <Button onClick={() => removePodcast(data.file)}
                                className={'bg-red-600 w-[200px]'}>Remove</Button>
                    </>
                }

                <Input type={'number'} value={data?.number ?? ''} onChange={e => setData('number', e.target.value)}
                       label={'Number'} error={errors.number}/>
                <Input value={data?.number_as_text ?? ''} onChange={e => setData('number_as_text', e.target.value)}
                       label={'Number as text'} error={errors.number_as_text}/>
                <Textarea error={errors.description} rows={4} value={data?.description ?? ''} label={'Description'}
                          onChange={e => setData('description', e.target.value)}/>
                <Button loading={processing} type={'submit'}>Submit</Button>
            </form>
        </Modal>
    );
};

export default LessonForm;
