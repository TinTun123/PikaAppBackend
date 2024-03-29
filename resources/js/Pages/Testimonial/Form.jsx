import { useForm } from "@inertiajs/react";
import React, { useEffect } from 'react'
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import ImageUploader from "../../components/ImageUploader";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

const Form = ({ course, showForm, setShowForm, selectedTestimonial, type }) => {

  const { data, setData, errors, processing, post } = useForm({
    course_id: course.id,
    published: true,
  });

  const handleUpload = (file) => {
    setData((prev) => ({ ...prev, file }))
  }


  useEffect(() => {
    if (selectedTestimonial.id) {
      setData(selectedTestimonial);
    }
  }, [showForm, selectedTestimonial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = type === 'create' ? route('testimonial.store') : route('testimonial.update', selectedTestimonial.id);
    post(url, {
      preserveScroll: true,
      onSuccess: () => {
        setShowForm(false);
        setData({
          course_id: course.id,
          published: true,
        });
      }
    });
  };


  return (
    <Modal onClose={() => setShowForm(false)} show={showForm} >
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className={'font-medium'}>Type</p>
            <div className="flex items-center gap-3">
              {
                ['video', 'photo'].map(type => (
                  <div key={type} onClick={() => setData(pre => ({ ...pre, type, file: null }))} className={`w-full cursor-pointer border transition-all text-center p-2 ${type === data.type ? 'border border-primary' : ''}`}> {type} </div>
                ))
              }
            </div>
          </div>
          {
            data.type === 'video' &&
            <Input value={data?.file ?? ''} label={'Vimeo ID'} onChange={e => setData('file', e.target.value)} />
          }
          {
            data.type === 'photo' &&
            <div className="flex flex-col gap-2">
              <p className={'font-medium'}>Photo</p>
              <ImageUploader handleUpload={handleUpload} data={{ image: data?.file }} setData={setData} error={errors.image} />
            </div>
          }

          <Checkbox checked={data.published} onChange={e => setData('published', e.target.checked)} id={'published'} label={'Published'} />
        </div>
        <Button type='submit' loading={processing} className={'w-full mt-5'}>Submit</Button>
      </form>
    </Modal>
  )
}

export default Form;