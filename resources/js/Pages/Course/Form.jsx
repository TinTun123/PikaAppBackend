import React from 'react';
import Uploader from "../../components/Uploader.jsx";
import Input from "../../components/Input.jsx";
import Textarea from "../../components/Textarea.jsx";
import Button from "../../components/Button.jsx";
import ImageUploader from "../../components/ImageUploader.jsx";
import {useForm} from "@inertiajs/react";
import BackButton from "../../components/BackButton.jsx";
import Modules from "./Module/Modules.jsx";
import CustomSelect from "../../components/CustomSelect.jsx";
import Checkbox from "../../components/Checkbox.jsx";

const Form = ({course, categories}) => {

    const {data, setData, errors, processing, post} = useForm(course ?? {});

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = !course ? route('courses.store') : route('courses.update', course.id);
        post(url, {
            preserveScroll: true,
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
                        <div>
                            <CustomSelect label={'Category'} error={errors.category_id}
                                          onChange={(e) => setData('category_id', e.target.value)}>
                                <option value="">--- select ---</option>
                                {
                                    categories.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))
                                }
                            </CustomSelect>
                        </div>
                        <Input value={data?.fee ?? ''} error={errors.fee}
                               onChange={e => setData('fee', e.target.value)}
                               type={'number'} label={'Fee'}/>
                        <Input value={data?.author ?? ''} error={errors.author}
                               onChange={e => setData('author', e.target.value)} label={'Author'}/>
                        <Textarea error={errors.info} rows={4} value={data?.info ?? ''} label={'Course Info'}
                                  onChange={e => setData('info', e.target.value)}/>
                        <Textarea error={errors.outline} rows={4} value={data?.outline ?? ''} label={'Course Outline'}
                                  onChange={e => setData('outline', e.target.value)}/>
                        <Textarea error={errors.recommendation_text} rows={4} value={data?.recommendation_text ?? ''}
                                  label={'Recommendation Text'}
                                  onChange={e => setData('recommendation_text', e.target.value)}/>
                        <Textarea error={errors.attraction_text} rows={4} value={data?.attraction_text ?? ''}
                                  label={'Attraction Text'}
                                  onChange={e => setData('attraction_text', e.target.value)}/>

                        <div className={'flex gap-5'}>
                            <Checkbox id={'popular'} onChange={e => setData('popular',e.target.checked)} checked={data?.popular ?? false} label={'Popular'}/>
                            <Checkbox id='recommended'  onChange={e => setData('recommended',e.target.checked)} checked={data?.recommended ?? false} label={'Recommended'}/>
                        </div>

                        <div className={'flex justify-end'}>
                            <Button type={'submit'} className={'!w-[120px]'} loading={processing}>Save Course</Button>
                        </div>
                    </form>
                </div>

                {
                    course &&
                    <Modules course={course}/>
                }
            </div>
        </>
    );
};

export default Form;
