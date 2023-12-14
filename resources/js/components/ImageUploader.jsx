import React from 'react';
import Uploader from "./Uploader.jsx";

const ImageUploader = ({setData, data, error, handleUpload}) => {
    return (
        <div>
            <Uploader onRemoveFile={() => setData('image', null)} photo={data?.image}
                      onUpload={handleUpload}></Uploader>
            <p className={'text-red-500 text-sm'}>{error}</p>
        </div>
    );
};

export default ImageUploader;
