import React from 'react'
import Button from '../../components/Button';
import useCommon from '../../Hooks/useCommon';
import Form from './Form';
import Table from '../../components/Table';
import TableData from '../../components/TableData';
import TableRow from '../../components/TableRow';
import { Dropdown } from 'flowbite-react';
import { BsThreeDotsVertical } from 'react-icons/bs';


const columns = [
  { field: 'Title' },
  { field: 'price' },
  { field: 'image' },
  { field: 'file' },
  { field: 'category' },
  { field: 'description' },
  { field: 'author' },
]

const Index = ({ categories, audios }) => {

  const { prepareForEdit, prepareNewForm, formOpen, setFormOpen, current, setCurrent } = useCommon()

  return (
    <>
      <div>
        <Button onClick={prepareNewForm} >Create Audio</Button>
      </div>
      <Form categories={categories} current={current} show={formOpen} setFormOpen={setFormOpen} />
      <div>
        <Table columns={columns}>
          {
            audios.data.map(item => (
              <TableRow key={item.id}>
                <TableData>
                  {item.title}
                </TableData>
                <TableData>
                  {item.price}
                </TableData>
                <TableData>
                  <img width={100} src={item.image } alt="" />
                </TableData>
                <TableData>
                  <audio controls>
                    {/* http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3 */}
                      <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" type="audio/mp3" />
                      </audio> 
                </TableData>
                <TableData>
                  {item.category.name}
                </TableData>
                <TableData>
                  {item.description}
                </TableData>
                <TableData>
                  {item.author}
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