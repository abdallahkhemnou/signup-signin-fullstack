import { UserPlus } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUp() { 
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSubmit() { 
    axios.post('http://localhost:3000/signup', { user_name: userName, email, password });
    setUserName('');
    setEmail('');
    setPassword('');
  }
  return (
    <>
      <div className="flex flex-col items-center m-10 w-10% min-h-screen border border-gray-300 rounded-lg">
        <UserPlus className='m-10 w-10 h-10 bg-blue-100 text-blue-600 p-2 rounded-lg mb-0 -ml-30' />
        <div className='mt-3'>
          <h1 className='text-2xl font-bold'>Create Account</h1>
          <p>start by filling in your details</p>
        </div>
        <div className='flex flex-col gap-3 mt-5 ml-50 w-100'>
          <label htmlFor="user_name">User Name</label>
          <input className='border border-gray-300 rounded-lg p-2 -mt-2 mb-2' type="text" id="user_name" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input className='border border-gray-300 rounded-lg p-2 -mt-2 mb-2' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input className='border border-gray-300 rounded-lg p-2 -mt-2 mb-2' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <button className='bg-black text-white font-semibold rounded-lg p-2 mt-3 cursor-pointer' onClick={handleSubmit}>Sign up</button>
          <p className='text-sm text-center mt-3'>
            Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/signin')}>Sign in</span>
          </p>
        </div>
      </div>
    </>
  )
};
export default SignUp;