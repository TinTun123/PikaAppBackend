import React, {useEffect} from 'react';
import Modal from "../../../components/Modal.jsx";
import Input from "../../../components/Input.jsx";
import {useForm} from "@inertiajs/react";
import Button from "../../../components/Button.jsx";
import Textarea from "../../../components/Textarea.jsx";
import lessons from "./Lessons.jsx";

const LessonForm = ({showForm, setShowForm, lesson, courseId}) => {

    const {data, setData, errors, post} = useForm(lesson ?? {});

    useEffect(() => {
        setData(lesson);
    }, [lesson])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        let url = lesson ? route('lessons.update', lesson.id) : route('lessons.store');
        post(url, {
            onSuccess: () => {
                setShowForm(false);
            }
        })
    }

    useEffect(() => {
        setData(pre => ({...pre, course_id: courseId}));
    }, [courseId])

    return (
        <Modal show={showForm} onClose={() => setShowForm(false)}>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-3'}>
                <Input value={data?.title ?? ''} onChange={e => setData('title', e.target.value)} label={'Title'}
                       error={errors.title}/>
                <Input value={data?.video ?? ''} onChange={e => setData('video', e.target.value)} label={'Vimeo Url'}
                       error={errors.video}/>
                <Input type={'number'} value={data?.number ?? ''} onChange={e => setData('number', e.target.value)}
                       label={'Number'} error={errors.number}/>
                <Textarea error={errors.description} rows={4} value={data?.description ?? ''} label={'Description'}
                          onChange={e => setData('description', e.target.value)}/>
                <Button type={'submit'}>Submit</Button>
            </form>
        </Modal>
    );
};

export default LessonForm;
