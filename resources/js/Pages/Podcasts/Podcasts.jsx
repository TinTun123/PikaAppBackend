import React, {useState} from 'react'
import {useForm} from '@inertiajs/react';
import Table from '../../components/Table';
import TableData from '../../components/TableData';
import TableRow from '../../components/TableRow';
import Button from '../../components/Button';
import {Dropdown} from 'flowbite-react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import ConfirmModal from '../../components/ConfirmModal';
import Paginator from "../../components/Paginator.jsx";


const Podcasts = ({podcasts, prepareForEdit, links}) => {

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [currentPodcast, setCurrentPodcast] = useState(null);
    const {delete: deletePodcastMethod} = useForm({});

    const columns = [
        {field: 'Title'},
        {field: 'Status'},
        {field: 'price'},
        {field: 'image'},
        {field: 'file'},
        {field: 'category'},
        {field: 'popular'},
        {field: 'recommended'},
    ]

    const {post} = useForm({});
    const togglePopular = (id) => {
        post(route('podcast.togglePopular', id), {
            onSuccess: () => {

            }
        });
    }

    const toggleRecommended = (id) => {
        post(route('podcast.toggleRecommended', id), {
            onSuccess: () => {

            }
        });
    }

    const prepareForDelete = (podcast) => {
        setConfirmModalOpen(true);
        setCurrentPodcast(podcast);
    };

    const deletePodcast = () => {
        deletePodcastMethod(route('podcast.destroy', currentPodcast.id), {
            onSuccess: () => {
                setConfirmModalOpen(false);
            }
        });
    }

    console.log(podcasts);

    return (
        <div className={'overflow-x-scroll'}>
            <ConfirmModal onCancel={() => setConfirmModalOpen(false)} onConfirm={deletePodcast}
                          show={confirmModalOpen}/>
            <Table columns={columns}>
                {
                    podcasts.map(item => (
                        <TableRow key={item.id}>
                            <TableData>
                                {item.title}
                            </TableData>
                            <TableData>
                                {item.type}
                            </TableData>
                            <TableData>
                                {item.price}
                            </TableData>
                            <TableData>
                                <img width={100} src={item.image} alt=""/>
                            </TableData>
                            <TableData>
                                <audio controls>
                                    {/* http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3 */}
                                    <source src={item.playable_file} type="audio/mp3"/>
                                </audio>
                            </TableData>
                            <TableData>
                                {item.category.name}
                            </TableData>
                            <TableData>
                                <Button className={'w-[120px] px-2'} onClick={() => togglePopular(item.id)}>
                                    {item.popular ? 'Unpopular' : 'Make Popular'}
                                </Button>
                            </TableData>
                            <TableData>
                                <Button className={'w-[100px] px-2'} onClick={() => toggleRecommended(item.id)}>
                                    {item.recommended ? 'Remove' : 'Add'}
                                </Button>
                            </TableData>

                            <TableData>
                                <Dropdown label='' renderTrigger={() => (
                                    <div className={'cursor-pointer'}>
                                        <BsThreeDotsVertical/>
                                    </div>
                                )}>
                                    <Dropdown.Item onClick={() => prepareForEdit(item)}>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={() => prepareForDelete(item)}>Delete</Dropdown.Item>
                                </Dropdown>
                            </TableData>
                        </TableRow>
                    ))
                }
            </Table>
            <Paginator links={links}/>
        </div>
    )
}

export default Podcasts;
