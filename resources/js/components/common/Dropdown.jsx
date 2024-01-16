import React from 'react'
import { Dropdown as FlowbiteDropdown } from "flowbite-react";
const Dropdown = ({ children, renderTrigger }) => {


  return (
    <FlowbiteDropdown className={'!bg-white'} label='' renderTrigger={() => (
      <div className={'cursor-pointer'}>
        {renderTrigger()}
      </div>
    )}>
      {children}
    </FlowbiteDropdown>
  )
}

const Item = ({ children, ...rest }) => {
  return (
    <FlowbiteDropdown.Item
      {...rest}
      className={'hover:!bg-gray-100 !text-black'}
    >
      {children}
    </FlowbiteDropdown.Item>
  )
}
Dropdown.Item = Item;

export default Dropdown;
