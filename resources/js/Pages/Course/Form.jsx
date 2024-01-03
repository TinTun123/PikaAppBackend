import React from 'react';
import Uploader from "../../components/Uploader.jsx";
import Input from "../../components/Input.jsx";
import Textarea from "../../components/Textarea.jsx";
import Button from "../../components/Button.jsx";
import ImageUploader from "../../components/ImageUploader.jsx";
import {useForm} from "@inertiajs/react";
import BackButton from "../../components/BackButton.jsx";
import Modules from "./Module/Modules.jsx";

const Form = ({course}) => {

    const {data, setData, errors, processing, post} = useForm(course ?? {});

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = !course ? route('courses.store') : route('courses.update', course.id);
        post(url, {
            onSuccess: () => {

            }
        });
    }

    const handleUpload = (file) => {
        setData((prev) => ({...prev, image: file}))
    }

    return (
        < >
            <BackButton href={route('courses.index')}/>
            <div className={'min-h-screen bg-white rounded-md p-3 divide-y'}>
                <div className={'grid grid-cols-1 md:grid-cols-3 gap-5 mb-4'}>
                    <ImageUploader handleUpload={handleUpload} data={data} setData={setData} error={errors.image}/>
                    <form onSubmit={handleSubmit} className={'col-span-2 flex flex-col gap-3'}>
                        <Input value={data?.title ?? ''} error={errors.title}
                               onChange={e => setData('title', e.target.value)}
                               label={'Title'}/>
                        <Input value={data?.price ?? ''} error={errors.price}
                               onChange={e => setData('price', e.target.value)}
                               type={'number'} label={'Price'}/>
                        <Input value={data?.instructor ?? ''} error={errors.instructor}
                               onChange={e => setData('instructor', e.target.value)} label={'Instructor'}/>
                        <Textarea error={errors.description} rows={4} value={data?.description ?? ''} label={'Description'}
                                  onChange={e => setData('description', e.target.value)}/>
                        <div className={'flex justify-end'}>
                            <Button type={'submit'} className={'w-[200px]'} loading={processing}>Save Course</Button>
                        </div>
                    </form>
                </div>

                <Modules course={course} />
            </div>
        </>
    );
};

export default Form;
