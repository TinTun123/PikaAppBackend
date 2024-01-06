import React, { useState } from 'react'
import Button from "../../components/Button";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableData from "../../components/TableData";
import { useForm } from "@inertiajs/react";
import Form from "./Form";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { motion } from 'framer-motion';
import { BsGridFill, BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown } from "flowbite-react";
import ConfirmModal from "../../components/ConfirmModal";



const columns = [
  { field: 'ID' },
  { field: 'type' },
  { field: 'published' },
  { field: 'Actions' },
]


const Index = ({ testimonials, course }) => {

  const [showForm, setShowForm] = useState(false);
  const { post, delete: destroy } = useForm({});
  const [table, setTable] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState({});
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [type, setType] = useState('create');

  const handleAddNew = () => {
    setShowForm(true);
    setType('create');
  }

  const togglePublish = (id) => {
    post(route('testimonial.toggle.publish', id), {
      preserveScroll: true,
    });
  }

  const handleEdit = (item) => {
    setSelectedTestimonial(item);
    setShowForm(true);
    setType('edit');
  }

  const openDeleteModal = (item) => {
    setSelectedTestimonial(item);
    setDeleteModalOpen(true);
  }

  const deleteTestimonial = () => {
    destroy(route('testimonial.destroy', selectedTestimonial.id), {
      onSuccess: () => setDeleteModalOpen(false),
    });
  }

  return (
    <>
      <ConfirmModal onCancel={() => setDeleteModalOpen(false)} onConfirm={deleteTestimonial} show={deleteModalOpen} />
      <Form type={type} showForm={showForm} course={course} selectedTestimonial={selectedTestimonial} setShowForm={setShowForm} />
      <div className="flex justify-between ">
        <Button onClick={() => handleAddNew()} >Create Testimonial</Button>
        <button onClick={() => setTable(!table)} className="p-2 bg-gray-200 text-xl"><BsGridFill /></button>
      </div>

      <AnimatePresence>
        <motion.div
          layout
          initial={{ height: '0px' }}
          animate={{ height: 'auto' }}
          exit={{ height: '0px' }}
          transition={{ duration: 0.1 }}
        >
          {
            table &&
            <Table columns={columns}>
              {
                testimonials.map(item => (
                  <TableRow key={item.id}>
                    <TableData>{item.id}</TableData>
                    <TableData>{item.type}</TableData>
                    <TableData>
                      <Button className={'w-[120px] px-2'} onClick={() => togglePublish(item.id)}>
                        {item.published ? 'Unpublished' : 'Publish'}
                      </Button>
                    </TableData>
                    <TableData>
                      <Dropdown className={'bg-white'} label='' renderTrigger={() => (
                        <div className={'cursor-pointer'}>
                          <BsThreeDotsVertical />
                        </div>
                      )}>
                        <Dropdown.Item onClick={() => handleEdit(item)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => openDeleteModal(item)}>Delete</Dropdown.Item>
                      </Dropdown>
                    </TableData>
                  </TableRow>
                ))
              }
            </Table>
          }
          {
            !table &&
            <div className="grid grid-cols-1 mt-3 lg:grid-cols-3 gap-3 ">
              {
                testimonials.map(item => (
                  <div className="border border-dashed border-gray-300 flex flex-col gap-3 justify-between max-h-[330px] p-3">
                    {
                      item.type === 'video' &&
                      <div className="relative aspect-video ">
                        <iframe
                          src={`https://player.vimeo.com/video/${item.file}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                          frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                          className="w-full h-full"></iframe>
                      </div>
                    }
                    {
                      item.type === 'photo' &&
                      <img className="h-[190px] w-full object-cover" src={item.file} alt="" />
                    }

                    <div className="flex justify-between items-center">
                      <Button className={'w-[120px] px-2'} onClick={() => togglePublish(item.id)}>
                        {item.published ? 'Unpublished' : 'Publish'}
                      </Button>
                      <Dropdown className={'bg-white'} label='' renderTrigger={() => (
                        <div className={'cursor-pointer'}>
                          <BsThreeDotsVertical />
                        </div>
                      )}>
                        <Dropdown.Item onClick={() => handleEdit(item)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => openDeleteModal(item)}>Delete</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                ))
              }
            </div>
          }


        </motion.div>
      </AnimatePresence>
    </>
  )
}



export default Index;