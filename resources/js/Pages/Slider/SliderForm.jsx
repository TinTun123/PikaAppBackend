import React from 'react';
import Modal from "../../components/Modal.jsx";
import Input from "../../components/Input.jsx";
import Uploader from "../../components/Uploader.jsx";
import {useForm} from "@inertiajs/react";
import Button from "../../components/Button.jsx";
import ImageUploader from "../../components/ImageUploader.jsx";

const SliderForm = ({showForm,setShowForm}) => {

    const {data,setData,errors,post, processing} = useForm({});


    const handleUpload = (file) => {
            setData((prev) => ({...prev, image: file}))
    }

    const handleSubmit = () => {
        post(route('sliders.store'),{
            onSuccess : () => {
                setShowForm(false);
                setData({});
            }
        });
    }

    return (
        <Modal show={showForm} onClose={()=> setShowForm(false)}>
            <div className={'flex flex-col gap-3'}>
                <Input label={'Link'} onChange={e => setData('link',e.target.value)} error={errors.link} />
                <ImageUploader handleUpload={handleUpload} data={data} setData={setData} error={errors.image} />
                <Button onClick={handleSubmit} loading={processing}>Submit</Button>
            </div>
        </Modal>
    );
};

export default SliderForm;
