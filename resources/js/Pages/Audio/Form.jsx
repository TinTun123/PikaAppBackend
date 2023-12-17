import React, { useEffect } from 'react'
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from '@inertiajs/react';
import Textarea from '../../components/Textarea';
import ImageUploader from '../../components/ImageUploader';
import CustomSelect from '../../components/CustomSelect';

const Form = ({show,current, setFormOpen, categories}) => {

  const {data, setData,processing,errors, post} = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = current ? route('audio.update',current.id) : route('audio.store');
    post(url, {
      onSuccess : () => {

      }
    });
  }

  useEffect(() => {
    if (current) {
      setData(current);
    }
  }, [current]);


  const handleUpload = (file) => {
    setData((prev) => ({ ...prev, image: file }))
  }


  return (
    <Modal show={show} onClose={() => setFormOpen(false)} >
      <form onSubmit={handleSubmit} className={'col-span-2 flex flex-col gap-3'}>
        <ImageUploader handleUpload={handleUpload} data={data} setData={setData} error={errors.image} />
        <Input value={data?.title ?? ''} error={errors.title}
          onChange={e => setData('title', e.target.value)}
          label={'Title'} />
        <Input value={data?.time ?? ''} error={errors.time}
          onChange={e => setData('time', e.target.value)}
          label={'Time'} />
        <Input value={data?.price ?? ''} error={errors.price}
          onChange={e => setData('price', e.target.value)}
          label={'Price'} />
        <Input value={data?.file ?? ''} error={errors.file}
          onChange={e => setData('file', e.target.value)}
          label={'File'} />
          <CustomSelect error={errors.category_id} onChange={(e)=> setData('category_id',e.target.value)}>
            <option value="">--- select ---</option>
            {
              categories.map(item => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))
            }
          </CustomSelect>
        <Textarea error={errors.description} rows={4} value={data?.description ?? ''} label={'Description'}
          onChange={e => setData('description', e.target.value)} />
        <Textarea error={errors.author} rows={4} value={data?.author ?? ''} label={'author'}
          onChange={e => setData('author', e.target.value)} />
        <div className={'flex justify-end'}>
          <Button type={'submit'} className={'w-[200px]'} loading={processing}>Save</Button>
        </div>
      </form>
    </Modal>
  )
}

export default Form;