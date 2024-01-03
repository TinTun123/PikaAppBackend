import {usePage} from '@inertiajs/react';
import React, {useEffect, useRef, useState} from 'react'
import Resumable from 'resumablejs';

const AudioUploader = ({handleUploadSuccess}) => {
    const page = usePage();
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [percentage, setPercentage] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);

    const browseFile = useRef(null);

    const handleUploadVideo = async (resumable) => {
        setOpenModal(false);
        resumable.opts.query.filename = 'hello';
        resumable.opts.query.path = 'thisispath';

        resumable.upload();
    }

    useEffect(() => {
        if (browseFile.current) {
            const resumable = new Resumable({
                target: 'api/audio/upload',
                method: 'POST',
                query: {_token: page.props.csrf_token},
                fileType: [],
                chunkSize: 1 * 1024 * 1024, // default is 1*1024*1024, this should be less than your maximum limit in php.ini
                headers: {
                    'Accept': 'application/json'
                },
                testChunks: false,
                throttleProgressCallbacks: 1,
            });

            resumable.assignBrowse(browseFile.current);
            resumable.on('fileAdded', () => {
                setLoading(true);


                handleUploadVideo(resumable);
            });
            resumable.on('fileProgress', (file) => {
                window.onbeforeunload = function () {
                    return 'Dude, are you sure you want to leave? Think of the kittens!';
                };
                setPercentage(Math.floor(file.progress() * 100));
            });
            resumable.on('fileSuccess', async (file, res) => {

                const response = JSON.parse(res);
                handleUploadSuccess(response);
                window.onbeforeunload = null;
                setIsUploaded(true);
                setLoading(false);
            });
        }
    }, [browseFile])

    return (
        <div
            className='p-10 border-[1.9px] border-gray-400 border-dashed'>
            {
                loading &&
                <div style={{width: +percentage + '%'}}
                     className={`p-1 my-5 text-white font-semibold bg-primary transition-all duration-500 rounded-full text-center`}>
                    {+percentage} %
                </div>
            }
            {
                !loading && isUploaded &&
                <div style={{width: +percentage + '%'}}
                     className={`p-1 my-5 text-white font-semibold bg-green-400 transition-all duration-500 rounded-full text-center`}>
                    {+percentage} %
                </div>
            }

            {
                loading || !isUploaded &&
                <p
                    className='cursor-pointer text-center'
                    ref={browseFile}
                >
                    Browse File
                </p>
            }
        </div>
    )
}

export default AudioUploader;
