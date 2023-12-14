import React from 'react';

const Input = ({type = 'text', label, error, className = '', ...rest}) => {
    return (
        <>
            {
                label && <p className={'font-medium'}>{label}</p>
            }
            <input  {...rest}
                    type={type}
                    className={'w-[100%] border-primary border-[.1px]  focus:ring-4 focus:ring-primary focus:ring-opacity-10 px-2 placeholder:text-gray-400 h-[40px] ' + className}/>
            {
                error && <p className={'text-red-500 text-sm'}>{error}</p>
            }
        </>
    );
};

export default Input;
