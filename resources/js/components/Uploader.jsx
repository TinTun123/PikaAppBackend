// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'


import { useMemo, useState } from 'react'

// Register the plugins
registerPlugin( FilePondPluginImagePreview)

// Our app
const label = `
<div style="display:flex; align-items:center; gap: 2; flex-direction: column; justify-content:center;">
    <img style="width:60%" src="" />
    <div class="dark:text-gray-400">
        Drag & Drop your files or <span class="filepond--label-action">Browse</span>
    </div>
</div>
`;
export default function Uploader({allowMultiple = false ,images, maxFiles = 1 , onUpload, photo= '',onRemoveFile, labelIdle=label}) {

    let [files,setFiles] = useState([]);

    if(allowMultiple && maxFiles===1) {
        throw new Error('max file should not be 1 if you allow mutiple upload');
    }

    let handleUpdateFiles = (_files) => {
        setFiles(_files);
        if(_files.length) {
            if(allowMultiple) {
                onUpload(_files.map(f => f.file))
            }else {
                if(_files[0].file instanceof File) {
                    onUpload(_files[0].file)
                }
            }
        }
    }

    let computedFiles = useMemo(() => {
        if(photo) {
            return [ {
                source: photo,
            }];
        }
        if(images) {
            return images.map(i => ({
                source: i,
            }));
        }
        return null;

    },[photo,files])

    return (
        <FilePond
            onremovefile={onRemoveFile}
            files={computedFiles}
            onupdatefiles={handleUpdateFiles}
            allowMultiple={allowMultiple}
            maxFiles={maxFiles}
            name="files" /* sets the file input name, it's filepond by default */
            labelIdle={labelIdle}
        />
    )
}
