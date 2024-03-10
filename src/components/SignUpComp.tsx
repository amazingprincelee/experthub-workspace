import { notification } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignUpComp = ({ role, action }: { role: string, action?: () => void }) => {
  const [api, contextHolder] = notification.useNotification();
  const [active, setActive] = useState(false)
  const [fullname, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("nigeria")
  const [state, setState] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const states_in_nigeria = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory"
  ]
  const signupApplicant = async () => {
    if (fullname && email && phone && country && state && address && password) {
      if (password === confirmPassword) {
        setLoading(true)
        axios.post(`https://shark-app-2-k9okk.ondigitalocean.app/auth/register`, {
          fullname,
          email,
          phone,
          country,
          state,
          address,
          password,
          userType: role
        })
          .then(function (response) {
            console.log(response.data)
            setLoading(false)
            if (action) {
              action()
            } else {
              router.push(`/auth/verify`)
            }
          })
          .catch(error => {
            setLoading(false)
            api.open({
              message: error.response.data.message
            });
            console.log(error.response.data.message)
          })
      } else {
        api.open({
          message: "Password don't match confirm password"
        });
      }
    } else {
      api.open({
        message: "Please fill all fields!"
      });
    }
  }
  return (
    <div>
      {contextHolder}
      <div>
        <div className='my-2 text-xs'>
          <label className='font-medium'>Full Name</label>
          <input onChange={e => setName(e.target.value)} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm' type="text" placeholder='e.g John' />
        </div>
        <div className='my-2 text-xs'>
          <label className='font-medium'>Email</label>
          <input onChange={e => setEmail(e.target.value)} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm' type="email" placeholder='Sample@gmail.com' />
        </div>
        <div className='flex justify-between'>
          <div className='my-2 text-xs w-[48%]'>
            <label className='font-medium'>Phone number</label>
            <input onChange={e => setPhone(e.target.value)} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm' type="number" placeholder='eg: 0122 222 000' />
          </div>
          <div className='my-2 text-xs w-[48%]'>
            <label className='font-medium'>Country</label>
            <select onChange={e => setCountry(e.target.value)} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm'>
              <option value="nigeria">nigeria</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='my-2 text-xs w-[48%]'>
            <label className='font-medium'>State</label>
            <select onChange={e => setState(e.target.value)} value={state} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm'>
              {states_in_nigeria.map(value => <option key={value} value={value}>{value}</option>)}
            </select>
          </div>
          <div className='my-2 text-xs w-[48%]'>
            <label className='font-medium'>Address</label>
            <input onChange={e => setAddress(e.target.value)} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm' type="text" placeholder='' />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='my-2 text-xs w-[48%]'>
            <label className='font-medium'>Password</label>
            <input onChange={e => setPassword(e.target.value)} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm' type="password" placeholder='************' />
          </div>
          <div className='my-2 text-xs w-[48%] relative'>
            <label className='font-medium'>Confirm Password</label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className='w-full border my-1 border-[#FA815136] p-2 rounded-sm' type={active ? "text" : "password"} placeholder='************' />
            <img onClick={() => setActive(!active)} className='absolute top-7 right-2 cursor-pointer' src="/images/icons/eyes.svg" alt="" />
          </div>
        </div>
        <div className='my-2 text-xs'>
          <button onClick={() => signupApplicant()} className='w-full bg-primary p-2 rounded-sm font-medium'>{loading ? "Loading..." : "Signup"}</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;