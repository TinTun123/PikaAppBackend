import React from 'react';
import Lottie from "lottie-react";
import { useForm } from "@inertiajs/react";
import Button from "../../components/Button.jsx";
import LoginLottie from '../../constant/login.json';
import Input from "../../components/Input.jsx";

const Login = () => {

  const { data, setData, post, errors, processing } = useForm({});

  const handleChange = (field, e) => {
    setData(pre => ({ ...pre, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('login'), {

    });
  };

  return (
    <div className={'grid grid-cols-1 lg:grid-cols-2 gap-14 p-10 lg:p-20 '}>
      <Lottie className="max-w-[70%] mx-auto" animationData={LoginLottie} loop={true} />
      <div className={'flex items-center justify-center lg:justify-start '}>
        <form onSubmit={handleSubmit} className={'flex gap-5 flex-col w-full lg:w-[60%] '}>
          <Input error={errors.email} label={'Email'} value={data.email ?? ''} onChange={(e) => handleChange('email', e)}
            type={'email'} required={true} />
          <Input error={errors.password} label={'Password'} value={data.password ?? ''} onChange={(e) => handleChange('password', e)}
            required={true} type={'password'} />
          <Button type={'submit'} loading={processing} className={'rounded-md mt-10'}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;