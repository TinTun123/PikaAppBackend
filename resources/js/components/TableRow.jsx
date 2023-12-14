import React from 'react';

const TableRow = ({children, className}) => {
    return (
        <tr className={`single-row  ${className}`}>
            {children}
        </tr>
    );
};

export default TableRow;
