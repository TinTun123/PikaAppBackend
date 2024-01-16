import React, {useEffect} from 'react'
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useForm} from '@inertiajs/react';
import Textarea from '../../components/Textarea';
import ImageUploader from '../../components/ImageUploader';
import CustomSelect from '../../components/CustomSelect';
import AudioUploader from '../../components/AudioUploader';
import axios from 'axios';

const Form = ({show, current, setFormOpen, categories}) => {

    const {data, setData, processing, errors, post} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = current ? route('podcast.update', current.id) : route('podcast.store');
        post(url, {
            onSuccess: () => {
            setFormOpen(false);
            setData({});
            }
        });
    }

    useEffect(() => {
        if (current) {
            setData(current);
        } else {
            setData({});
        }
    }, [current]);


    const handleUpload = (file) => {
        setData((prev) => ({...prev, image: file}))
    }

    const handleUploadSuccess = (response) => {
        console.log(response);
        setData(pre => ({...pre, file: response.path, playable_file: response.playable_file}))
    }

    const removePodcast = async (path) => {
        try {
            const res = await axios.post(route('podcast.remove'), {path})
            setData(pre => ({...pre, file: null, playable_file: null, time: 0}));
        } catch (e) {
            console.log(e);
        }
    }




    return (
        <Modal show={show} onClose={() => setFormOpen(true)}>
            <form onSubmit={handleSubmit} className={'col-span-2 flex flex-col gap-3'}>
                <ImageUploader handleUpload={handleUpload} data={data} setData={setData} error={errors.image}/>

                {
                    !data.playable_file &&
                    <AudioUploader handleUploadSuccess={handleUploadSuccess}/>
                }
                <p className={'text-red-500 text-sm'}>{errors.file ?? ''}</p>

                {
                    data.playable_file &&
                    <>
                        <audio className={'w-full '} controls>
                            <source src={data.playable_file} type="audio/mp3"/>
                        </audio>
                        <Button onClick={() => removePodcast(data.file)}
                                className={'bg-red-600 w-[200px]'}>Remove</Button>
                    </>
                }

                <Input value={data?.title ?? ''} error={errors.title}
                       onChange={e => setData('title', e.target.value)}
                       label={'Title'}/>

                <p className={'font-medium'}>Type</p>
                <div className="flex items-center gap-3">
                    {
                        ['free', 'paid'].map(type => (
                            <div key={type} onClick={() => setData(pre => ({...pre, type}))}
                                 className={`w-full cursor-pointer border transition-all text-center p-2 ${type === data.type ? 'border border-primary' : ''}`}> {type} </div>
                        ))
                    }
                </div>
                <p className={'text-red-500 text-sm'}>{errors.type ?? ''}</p>
                {
                    data?.type === 'paid' &&
                    <Input value={data?.price ?? ''} error={errors.price}
                           onChange={e => setData('price', e.target.value)}
                           label={'Price'}/>
                }

                <CustomSelect label={'Category'} error={errors.category_id}
                              onChange={(e) => setData('category_id', e.target.value)}>
                    <option value="">--- select ---</option>
                    {
                        categories.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </CustomSelect>
                <Textarea error={errors.description} rows={4} value={data?.description ?? ''} label={'Description'}
                          onChange={e => setData('description', e.target.value)}/>
                <Textarea error={errors.author} rows={4} value={data?.author ?? ''} label={'author'}
                          onChange={e => setData('author', e.target.value)}/>
                <div className={'flex gap-3'}>
                    <Button outline onClick={() => setFormOpen(false)} className={'w-full'}>Cancel</Button>
                    <Button type={'submit'} className={'w-full'} loading={processing}>Save</Button>
                </div>
            </form>
        </Modal>
    )
}

export default Form;
