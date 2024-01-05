import React, { useEffect } from 'react';
import Input from "../../../components/Input.jsx";
import Textarea from "../../../components/Textarea.jsx";
import Button from "../../../components/Button.jsx";
import Modal from "../../../components/Modal.jsx";
import { useForm } from "@inertiajs/react";

const ModuleForm = ({ showForm, setShowForm, courseId, module }) => {

    const { data, setData, processing, errors, post, clearErrors } = useForm(module.id ? module : { course_id: courseId });

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = module.id ? route('module.update', module.id) : route('module.store');
        post(url, {
            preserveScroll: true,
            onSuccess: () => setShowForm(false)
        });
    }

    useEffect(() => {
        if (module.id) {
            setData(module);
        }
    }, [module])

    useEffect(() => {
        if (showForm) {
            if (!module.id) {
                setData({ course_id: courseId })
            }
        }
        clearErrors();
    }, [showForm])

    return (

        <Modal show={showForm} onClose={() => setShowForm(false)}>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-3'}>
                <Input value={data?.title ?? ''} onChange={e => setData('title', e.target.value)} label={'Title'}
                    error={errors.title} />
                <Input type={'number'} value={data?.number ?? ''} onChange={e => setData('number', e.target.value)}
                    label={'Number'} error={errors.number} />
                <Textarea error={errors.description} rows={4} value={data?.description ?? ''} label={'Description'}
                    onChange={e => setData('description', e.target.value)} />
                <Button loading={processing} type={'submit'}>Submit</Button>
            </form>
        </Modal>
    );
};

export default ModuleForm;
