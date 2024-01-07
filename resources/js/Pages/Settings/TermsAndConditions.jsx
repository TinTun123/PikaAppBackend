import React from 'react'
import TextEditor from "../../components/common/TextEditor";
import Button from "../../components/Button";
import { useForm } from "@inertiajs/react";

const TermsAndConditions = ({ terms }) => {

  const { data, setData, post, errors, processing } = useForm({ ...terms });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('setting.terms.update'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextEditor content={data.terms} handleUpdate={e => setData('terms', e)} />
      <Button type="submit" loading={processing} className={'mt-3 px-3 ml-auto w-[100px]'}>Save</Button>
    </form>
  )
}

export default TermsAndConditions;