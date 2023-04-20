import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, Redirect } from 'react-router-dom';

import { signin, isAuthenticated, authenticate } from '../auth/helper';

const Signin = () => {
  const initialState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false,
  };
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const { user } = isAuthenticated();
  const [formValues, setFormValues] = useState(initialState);
  const { email, password, error, loading, didRedirect } = formValues;

  const handleSignin = (e) => {
    e.preventDefault();
    // console.log(formValues);
    setFormValues({ ...formValues, error: false, loading: true });
    setMessage('Loading...');
    signin({ email, password }).then((data) => {
      if (data.error) {
        setFormValues({ ...formValues, error: data.err, loading: false });
        setMessage(`Student login failed: ${error}`);
        setSuccess(false);
      } else {
        authenticate(data, () => {
          setFormValues({
            ...formValues,
            email: '',
            password: '',
            error: '',
            loading: false,
            didRedirect: true,
          });
        });
        setMessage(`Student login successfull!`);
        setSuccess(true);
      }
    });
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 0) {
        return <Redirect to="/dashboard" />;
      } else {
        return <Redirect to="/admin/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const handleChange = (field) => (e) => {
    setFormValues({ ...formValues, error: false, [field]: e.target.value });
  };
  return (
    <>
      {performRedirect()}
      <Navbar />
      <section className="text-gray-600 body-font flex justify-center items-center w-1/2 mx-auto mt-5 h-[90vh]">
        <form
          className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          onSubmit={handleSignin}
        >
          <div className=" bg-gray-100 rounded-lg  flex flex-col md:ml-auto w-full md:mt-0">
            <h2 className="text-gray-900 text-2xl title-font mb-2">
              Sign in to your account
            </h2>
            <p className={`text-3xl font-extrabold`}>{message}</p>

            <p className="my-2">
              New user?{' '}
              <span className="text-purple-500 cursor-pointer font-bold">
                <Link to="/signup">Signup</Link>
              </span>
            </p>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                data-ddg-inputtype="identities.emailAddress"
                data-ddg-autofill="true"
                required
                value={email}
                onChange={handleChange('email')}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password*
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                data-ddg-inputtype="identities.emailAddress"
                data-ddg-autofill="true"
                required
                value={password}
                onChange={handleChange('password')}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Signin
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Signin;
