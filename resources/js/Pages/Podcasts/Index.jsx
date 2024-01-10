import React from 'react'
import Button from '../../components/Button';
import useCommon from '../../Hooks/useCommon';
import Form from './Form';
import Podcasts from './Podcasts';

const Index = ({ categories, podcasts }) => {

  const { prepareForEdit, prepareNewForm, formOpen, setFormOpen, current } = useCommon()

  return (
    <>
      <div>
        <Button onClick={prepareNewForm} >Create Podcast</Button>
      </div>
      <Form categories={categories} current={current} show={formOpen} setFormOpen={setFormOpen} />
      <Podcasts prepareForEdit={prepareForEdit} links={podcasts.links} current={current}  podcasts={podcasts.data} />
    </>

  )
}

export default Index;
