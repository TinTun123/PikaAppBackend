import React from 'react'
import { useForm } from '@inertiajs/react';
import Table from '../../components/Table';
import TableData from '../../components/TableData';
import TableRow from '../../components/TableRow';
import Button from '../../components/Button';
import { Dropdown } from 'flowbite-react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Podcasts = ({podcasts}) => {
  const columns = [
    { field: 'Title' },
    { field: 'price' },
    { field: 'image' },
    { field: 'file' },
    { field: 'category' },
    { field: 'popular' },
    { field: 'recommended' },
    { field: 'description' },
    { field: 'author' },
  ]

  const { post } = useForm({});
  const togglePopular = (id, popular) => {
    post(route('audio.togglePopular', id), {
      onSuccess: () => {

      }
    });
  }

  const toggleRecommended = (id, recommended) => {
    post(route('audio.toggleRecommended', id), {
      onSuccess: () => {

      }
    });
  }

  return (
    <div>
      <Table columns={columns}>
        {
          podcasts.map(item => (
            <TableRow key={item.id}>
              <TableData>
                {item.title}
              </TableData>
              <TableData>
                {item.price}
              </TableData>
              <TableData>
                <img width={100} src={item.image} alt="" />
              </TableData>
              <TableData>
                <audio controls>
                  {/* http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3 */}
                  <source src={item.file} type="audio/mp3" />
                </audio>
              </TableData>
              <TableData>
                {item.category.name}
              </TableData>
              <TableData>
                <Button onClick={() => togglePopular(item.id, item.popular)}>
                  {item.popular ? 'Unpopular' : 'Make Popular'}
                </Button>
              </TableData>
              <TableData>
                <Button onClick={() => toggleRecommended(item.id, item.recommended)}>
                  {item.recommended ? 'Remove' : 'Add'}
                </Button>
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
  )
}

export default Podcasts;