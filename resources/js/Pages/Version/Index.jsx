import React from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from '@inertiajs/react';

const Index = ({version}) => {

  const {post, data,setData,processing} = useForm({version});

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('version.update'),{
      onSuccess : () => {

      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 '>
      <Input label={'Version'} value={data?.version} onChange={e=> setData('version' , e.target.value)} />
      <div>
        <Button type='submit' loading={processing}>Save</Button>
      </div>
    </form>
  )
}

export default Index;