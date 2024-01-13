import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
// import Logo from '../assets/images/yogo.jpeg';
// import Lottie from "lottie-react";
// import LoginLottie from '../assets/lotties/login.json';


const Login = (props) => {

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  console.log(errors);
  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  }

  return (
    <div className=" min-h-screen flex items-center p-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1  lg:grid-cols-2 items-center">
        <div>
          {/* <Lottie animationData={LoginLottie} /> */}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center  justify-center ">
          <div className="w-full bg-gray-100  p-10 rounded-lg">
            <div className="flex justify-center py-3">
              {/* <img src={Logo} className="w-[100px] h-[100px]" alt="Logo" /> */}
            </div>
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Email</span>
              <Input value={data?.email} onChange={e => setData('email', e.target.value)} placeholder={'Enter your email'}
                type={'email'} />
            </label>
            <label className="block mt-4 text-sm">
              <span className="text-gray-700 dark:text-gray-400">Password</span>
              <Input value={data?.password} onChange={(e) => setData('password', e.target.value)} placeholder='**********'
                type='password' />
            </label>
            fsdfsafa
            <Button type={'submit'} isLoading={processing} className={'mt-5'}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Login;