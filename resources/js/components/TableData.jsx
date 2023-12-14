import React from 'react';

const TableData = ({children, className}) => {
    return (
        <td className={`px-4 py-3 text-[13px] bg-white  whitespace-nowrap ${className}`}>
            {children}
        </td>
    );
};

export default TableData;
