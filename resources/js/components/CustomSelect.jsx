import React from 'react';
import Error from "./Error.jsx";

const CustomSelect = ({ label, id, children, error, onChange, containerClass, className }) => {
  return (
    <div className={`block ${containerClass}`}>
      {
        label &&
        <span className="block mb-2 text-md font-medium ">
          {label}
        </span>
      }
      <select
        id={id}
        onChange={onChange}
        className={"block w-full h-full px-3 py-2.5 focus:ring-4 focus:ring-opacity-20 focus:ring-primary border-[.1px] border-primary rounded-sm  mt-1 text-sm form-select  " + className}
      >
        {children}
      </select>
      {error && <Error message={error} />}
    </div>
  );
};

export default CustomSelect;