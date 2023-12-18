'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    router.push('/dashboard');

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        alert("login sucess");
        router.push('/dashboard');
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-login-backCover py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md rounded-md w-full space-y-8 bg-white px-10 py-10 shadow-md">
        <div>
          <h2 className=" text-center text-3xl font-extrabold text-primary">Log In</h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-borderColor placeholder-gray-400 text-textDark focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-borderColor placeholder-gray-400 text-textDark focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-primary hover:bg-secondary"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center">
          Don't have an account?{' '}
          <span className="text-secondary hover:underline">
            {' '}
            <Link href={'/auth/signup'}>Sign up</Link>{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
