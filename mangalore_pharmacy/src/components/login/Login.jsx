import React, { useState } from 'react';
import LoginImage from "../../assets/loginImage.svg";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();


    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
    }

    if (!password) {
      setPasswordError('Password is required');
    }

    if (email && password) {
      console.log('Logging in...');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex min-h-full bg-primary-color w-2/3  h-1/2 flex-1 flex-col justify-center px-6 py-12 lg:px-28">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-28 text-left text-2xl font-bold leading-9 tracking-tight text-white-300">
            Login to your account
          </h2>
          <br />
          <p className="text-cyan-100 text-sm">Welcome Back! Please Log In to your Account</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full bg-white h-10 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-left px-5 sm:text-sm sm:leading-6 ${emailError && 'border-red-500'}`}
                />
                <div className="text-white text-sm">{emailError}</div>
              </div>
            </div>

            <div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full rounded-lg bg-white  text-left border-0 h-10 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${passwordError && 'border-red-500'}`}
                />
                <div className="text-white text-sm">{passwordError}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-semibold text-white-600 hover:text-red-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-1/2 h-11 justify-center mx-auto rounded-lg bg-white px-3 py-2.5 text-sm  leading-6 text-secondary-color shadow-sm hover:bg-[lavender] text-center font-serif font-bold  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/3 bg-secondary-color h-full lg:flex flex-col hidden justify-between items-center " >

        <div></div>
        <div className="flex flex-col items-center gap-5">

          <h1 className="text-2xl font-bold">Click Here!</h1>

          <p className="text-sm text-white opacity-60 ">If you Don't have an account, Please Signup </p>

          <button className="bg-primary-color py-2 px-5" >Signup</button>
        </div>
        <img className="w-full h-1/2" src={LoginImage} alt="" />
      </div>
     


    </div>

  );
};

export default LoginForm;

