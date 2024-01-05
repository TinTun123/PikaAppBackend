import React from 'react'
import Button from '../../components/Button';
import useCommon from '../../Hooks/useCommon';
import Form from './Form';
import Table from '../../components/Table';
import TableData from '../../components/TableData';
import TableRow from '../../components/TableRow';
import { Dropdown } from 'flowbite-react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useForm } from '@inertiajs/react';
import Podcasts from './Podcasts';

const Index = ({ categories, audios }) => {

  const { prepareForEdit, prepareNewForm, formOpen, setFormOpen, current } = useCommon()

  return (
    <>
      <div>
        <Button onClick={prepareNewForm} >Create Podcast</Button>
      </div>
      <Form categories={categories} current={current} show={formOpen} setFormOpen={setFormOpen} />
      <Podcasts prepareForEdit={prepareForEdit} current={current}  podcasts={audios.data} />
    </>

  )
}

export default Index;