'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault();
    router.push('/auth')

    try {
      const response = await axios.post('http://localhost:3000/auth/signup', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log('Signup successful! Token:', token);
      } else {
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Failed to sign up');
    }
  };

  return (
    <div className='lg:h-screen w-full  bg-login-backCover flex justify-center items-center '>
      <div className='lg:w-[400px] sm:w-full md:w-[400px] w-full h-auto bg-white rounded-md shadow-lg px-8 py-10 '>
        <div className='text-[#0052CC] text-[34px] text-center font-bold tracking-wider'></div>
        <div className='py-4'>
          <p className='text-center mb-4 font-semibold text-textSoft'>Sign up to continue</p>
          <form onSubmit={handleSignUp}>
            <input
              type='text'
              placeholder='Username'
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:ring-secondary focus:border-secondary focus:outline-none border border-borderColor rounded-md'
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:ring-secondary focus:border-secondary focus:outline-none   border border-borderColor rounded-md'
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:ring-secondary focus:border-secondary focus:outline-none   border border-borderColor rounded-md'
              required
            />
            <p className='text-slate-800 mb-4 text-sm'>
              By signing up, I accept the SmartLead Terms of Service and acknowledge the Privacy Policy.
            </p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
              type='submit'
              className='w-full font-semibold text-white bg-secondary mb-4 py-2 rounded-sm hover:bg-primary'
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
