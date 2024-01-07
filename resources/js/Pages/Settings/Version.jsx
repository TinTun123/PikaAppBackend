import React from 'react'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "@inertiajs/react";

const Version = ({ version }) => {

  const { data, setData, errors, post, processing } = useForm(version);


  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('setting.version.update'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={data.version} onChange={e => setData('version', e.target.value)} className="" />

      <Button className={'mt-3 px-3 ml-auto w-[100px]'} loading={processing} type="submit" >Save</Button>
    </form>
  )
}

export default Version;