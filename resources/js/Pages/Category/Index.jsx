import React, { useState } from 'react'
import Button from '../../components/Button';
import Form from './Form';
import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import TableData from '../../components/TableData';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown } from 'flowbite-react';

const Index = ({ categories }) => {

  const [formOpen, setFormOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const prepareForEdit = (category) => {
    setCurrentCategory(category);
    setFormOpen(true);
  }

  const prepareNewForm = () => {
    setCurrentCategory(null);
    setFormOpen(true);
  }

  const openDeleteModal = () => {

  }

  return (
    <>
      <div>
        <Button onClick={prepareNewForm} >Create Category</Button>
      </div>
      <Form setFormOpen={setFormOpen} category={currentCategory} show={formOpen} />
      <div>
        <Table columns={[{ field: 'Name' }, { field: 'Actions' }]}>
          {
            categories.map(item => (
              <TableRow key={item.id}>
                <TableData>
                  {item.name}
                </TableData>
                <TableData>
                  <Dropdown label='' renderTrigger={() => (
                    <div className={'cursor-pointer'}>
                      <BsThreeDotsVertical />
                    </div>
                  )}>
                    <Dropdown.Item onClick={() => prepareForEdit(item)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => openDeleteModal(item)}>Delete</Dropdown.Item>
                  </Dropdown>
                </TableData>
              </TableRow>
            ))
          }
        </Table>
      </div>
    </>
  )
}

export default Index;