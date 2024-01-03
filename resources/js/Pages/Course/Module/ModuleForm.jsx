import React from 'react';
import Input from "../../../components/Input.jsx";
import Textarea from "../../../components/Textarea.jsx";
import Button from "../../../components/Button.jsx";
import Modal from "../../../components/Modal.jsx";
import {useForm} from "@inertiajs/react";

const ModuleForm = ({showForm, setShowForm, courseId}) => {

    const {data, setData, processing, errors, post} = useForm({
        course_id: courseId
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('module.store'), {
            preserveScroll: true,
        });
    }

    return (

        <Modal show={showForm} onClose={() => setShowForm(false)}>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-3'}>
                <Input value={data?.title ?? ''} onChange={e => setData('title', e.target.value)} label={'Title'}
                       error={errors.title}/>
                <Input type={'number'} value={data?.number ?? ''} onChange={e => setData('number', e.target.value)}
                       label={'Number'} error={errors.number}/>
                <Textarea error={errors.description} rows={4} value={data?.description ?? ''} label={'Description'}
                          onChange={e => setData('description', e.target.value)}/>
                <Button loading={processing} type={'submit'}>Submit</Button>
            </form>
        </Modal>
    );
};

export default ModuleForm;
