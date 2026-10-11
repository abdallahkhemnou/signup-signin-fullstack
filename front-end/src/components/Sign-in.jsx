import { Lock } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignIn() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function handleSubmit() { 
    try {
      const response = await axios.post('http://localhost:3000/signin', { email, password });
      setEmail('');
      setPassword('');
      console.log(response.data);
    } catch (error) {
      setError('Invalid email or password !');
    }
  }
  return (
    <>
      <div className="flex flex-col items-center m-10 w-10% min-h-screen border border-gray-300 rounded-lg">
        <Lock className='w-10 h-10 bg-green-100 text-green-600 p-2 rounded-lg mt-10 mb-0 -ml-40' />
        <div className='mt-3 -ml-10'>
          <h1 className='text-2xl font-bold'>Welcome back</h1>
          <p>Sign in to continue</p>
        </div>
        <div className='flex flex-col gap-3 mt-5 w-full md:w-100 md:ml-50'>
          <label htmlFor="email">Email</label>
          <input className='border border-gray-300 rounded-lg p-2 -mt-2 mb-2' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input className='border border-gray-300 rounded-lg p-2 -mt-2 mb-2' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
          <button className='bg-black text-white font-semibold rounded-lg p-2 mt-3 cursor-pointer' onClick={handleSubmit}>Sign in</button>
          <p className='text-sm text-center mt-3'>
            No account yet? <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/signup')}>Sign up</span>
          </p>
        </div>
      </div>
    </>
  )
};
export default SignIn;