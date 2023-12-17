import React from 'react';

const Textarea = (props) => {
    return (
        <>
            {
                props.label && <label className={'font-medium capitalize'}>{props.label}</label>
            }
            <textarea {...props}
                      className={'w-[100%] border-primary border-[.1px]  focus:ring-4 focus:ring-primary focus:ring-opacity-10 p-2 placeholder:text-gray-400  '}></textarea>
            {
                props.error && <p className={'text-red-500 text-sm'}>{props.error}</p>
            }
        </>
    );
};

export default Textarea;
