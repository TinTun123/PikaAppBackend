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



const columns = [
  { field: 'ID' },
  { field: 'type' },
  { field: 'published' },
  { field: 'Actions' },
]


const Index = ({ testimonials, course }) => {

  const [showForm, setShowForm] = useState(false);
  const { post, data, setData } = useForm({});
  const [table, setTable] = useState(false);


  const handleAddNew = () => {
    setShowForm(true);
  }

  const togglePublish = (id) => {
    console.log(id);
    post(route('testimonial.toggle.publish', id), {
      preserveScroll: true,
    });
  }

  const handleDelete = () => {

  }

  const openDeleteModal = () => {
    
  }

  return (
    <>
      <Form showForm={showForm} course={course} setShowForm={setShowForm} />
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
                        <Dropdown.Item onClick={() => handleEdit(lesson)}>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => openDeleteModal(lesson)}>Delete</Dropdown.Item>
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
                  <div className="border border-dashed border-gray-300 flex flex-col justify-around h-[340px] p-3">
                    {
                      item.type === 'video' &&
                      <div className="relative p-24">
                        <iframe
                          src={`https://player.vimeo.com/video/${item.file}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                          frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                          className="absolute top-0 left-0 w-full h-full"></iframe>
                      </div>
                    }
                    {/* <img src={item.file} alt="" /> */}

                    <div className="flex justify-center">
                      <Button className={'w-[120px] px-2'} onClick={() => togglePublish(item.id)}>
                        {item.published ? 'Unpublished' : 'Publish'}
                      </Button>
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