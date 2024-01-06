import React from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useForm } from '@inertiajs/react';
import { showSuccessToast } from '../../Global/Methods';
import DynamicIcons from "../../components/DynamicIcons";
import { FaAngleRight } from "react-icons/fa6";
import Version from "./Version";
import TermsAndConditions from "./TermsAndConditions";


const links = [
  {
    title: 'Version',
    link: 'setting.version',
    icon: 'FaRegShareFromSquare',
  },
  {
    title: 'Terms & Conditions',
    link: 'setting.term',
    icon: 'MdOutlinePolicy',
  },
]

const Index = ({ version }) => {

  const { post, data, setData, processing } = useForm({ version });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   post(route('version.update'),{
  //     onSuccess : () => {
  //       showSuccessToast('Version is updated ')
  //     }
  //   });
  // }
  const checkActive = (routeName) => {
    return window.location.href === route(routeName);
  }

  return (
    <div className="gap-5 grid grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-row lg:flex-col gap-2 ">
        {
          links.map(link => (
            <Link key={link.icon} href={route(link.link)} className={`flex items-center justify-between p-3 text-start bg-white  ${checkActive(link.link) ? '!bg-primary text-white' : ''}`}>
              <div className="flex gap-3 text-2xl items-center">
                <DynamicIcons name={link.icon} />
                <span className="text-base hidden lg:block">{link.title}</span>
              </div>
              <FaAngleRight className="hidden lg:block" />
            </Link>
          ))
        }
      </div>
      <div className="col-span-2">
        {
          checkActive('setting.version') &&
          <Version />
        }

        {
          checkActive('setting.term') &&
          <TermsAndConditions />
        }
      </div>
    </div>
  )
}

export default Index;