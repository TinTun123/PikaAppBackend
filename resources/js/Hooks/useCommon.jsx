import { useState } from "react";

const useCommon = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const prepareForEdit = (item) => {
      setCurrent(item);
      setFormOpen(true);
  }

  const prepareNewForm = () => {
    setCurrent(null);
    setFormOpen(true);
  }

  return {formOpen,setFormOpen,current,setCurrent, prepareForEdit, prepareNewForm
  
  };
}

export default useCommon;
