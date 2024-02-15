import React, { useState } from 'react';
import Pic2 from "../../assets/Pic2.svg";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [alternativeNumber, setAlternativeNumber] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [alternativeNumberError, setAlternativeNumberError] = useState('');

  const handleSignUp = () => {
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
    setContactNumberError('');
    setAddressError('');
    setAlternativeNumberError('');

    if (!firstName) {
      setFirstNameError('First Name is required');
    }

    if (!lastName) {
      setLastNameError('Last Name is required');
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Valid Email is required');
    }

    if (!password || !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(password)) {
      setPasswordError('Password must be at least 5 characters long and contain at least one special character and one number');
    }

    if (!contactNumber || !/^\d+$/.test(contactNumber)) {
      setContactNumberError('Valid Contact Number is required');
    }

    if (!address) {
      setAddressError('Address is required');
    }

    if (!alternativeNumber || !/^\d+$/.test(alternativeNumber)) {
      setAlternativeNumberError('Valid Alternative Number is required');
    }

    if (firstName && lastName && email && password && contactNumber && address && alternativeNumber) {
      console.log('Signing up...');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center bg-primary-color w-2/3 h-1/2 px-6 py-12 lg:px-28">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign Up as Pharmacy wholeseller
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  name="First Name"
                  type="text"
                  placeholder="First Name"
                  autoComplete="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`block w-full rounded-md border-0 bg-white py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${firstNameError && 'border-red-500'}`}
                />
                <div className="text-white text-sm font-bold">{firstNameError}</div>
              </div>
              <div className="mt-2">
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Last Name"
                  autoComplete="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`block w-full rounded-md border-0 bg-white py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${lastNameError && 'border-red-500'}`}
                />
                <div className="text-white text-sm font-bold">{lastNameError}</div>
              </div>
              <div className="mt-2">
                <input
                  name="Email"
                  type="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full rounded-md border-0 bg-white py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${emailError && 'border-red-500'}`}
                />
                <div className="text-white text-sm font-bold">{emailError}</div>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full rounded-md border-0 bg-white py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${passwordError && 'border-red-500'}`}
                />
                <div className="text-white text-sm font-bold">{passwordError}</div>
              </div>
              <div className="mt-2">
                <input
                  name="Contact Number"
                  type="tel"
                  placeholder="Your Contact Number"
                  autoComplete="tel"
                  required
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className={`block w-full rounded-md border-0 bg-white py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${contactNumberError && 'border-red-500'}`}
                />
                <div className="text-white text-sm font-bold">{contactNumberError}</div>
              </div>
              <div className="mt-2">
                <input
                  name="Address"
                  type="text"
                  placeholder="Address"
                  autoComplete="street-address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`block w-full rounded-md border-0 bg-white py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${addressError && 'border-red-500'}`}
                />
                <div className="text-white text-sm font-bold">{addressError}</div>
              </div>
              <div className="mt-2">
                <input
                  name="Alternative Number"
                  type="tel"
                  placeholder="Alternative Number"
                  autoComplete="tel"
                  required
                  value={alternativeNumber}
                  onChange={(e) => setAlternativeNumber(e.target.value)}
                  className={`block w-full rounded-md border-0 bg-white py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${alternativeNumberError && 'border-red-500'}`}
                />
                <div className="text-white text-sm font-bold">{alternativeNumberError}</div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSignUp}
                className="flex w-1/3 mx-auto justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-secondary-color shadow-sm hover:bg-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/3 bg-secondary-color h-full flex flex-col justify-between items-center">
        <div></div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold">Click Here!</h1>
          <p className="text-white opacity-60">If you Already have an account?</p>
          <button className="bg-primary-color py-2 px-5">Log In</button>
        </div>
        <img className="w-full" src={Pic2} alt="" />
      </div>
    </div>
  );
};

export default SignUpForm;
