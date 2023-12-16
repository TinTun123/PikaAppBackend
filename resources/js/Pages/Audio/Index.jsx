import React from 'react'
import Button from '../../components/Button';
import useCommon from '../../Hooks/useCommon';

const Index = () => {

  const {prepareForEdit, prepareNewForm,formOpen,setFormOpen,current,setCurrent} = useCommon()

  return (
    <>
      <div>
        <Button onClick={prepareNewForm} >Create Audio</Button>
      </div>
    </>

  )
}

export default Index;