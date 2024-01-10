import React, {useEffect} from 'react'
import Modal from '../../components/Modal';
import {useForm, usePage} from '@inertiajs/react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Form = ({setFormOpen, show, category}) => {

    const page = usePage();

    let type = '';
    if (page.url === '/category/course') {
        type = 'course';
    } else {
        type = 'podcast';
    }

    const {data, setData, errors, post, processing} = useForm({type});

    useEffect(() => {
        if (category) {
            setData(category);
        }
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = category ? route('category.update', category.id) : route('category.store');
        post(url, {
            onSuccess: () => {
                setFormOpen(false);
                setData({});
            }
        })
    }
    return (
        <Modal show={show} onClose={() => setFormOpen(false)}>
            <form onSubmit={handleSubmit} className={'col-span-2 flex flex-col gap-3'}>
                <Input value={data?.name ?? ''} error={errors.name}
                       onChange={e => setData('name', e.target.value)}
                       label={'Name'}/>
                <div className={'flex justify-end'}>
                    <Button type={'submit'} className={'w-[200px]'} loading={processing}>Save</Button>
                </div>
            </form>
        </Modal>
    )
}

export default Form;
