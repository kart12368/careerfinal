import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { signup } from '../auth/helper';

const Signup = () => {
  const initialFormState = {
    fullName: '',
    email: '',
    password: '',
    sscMarks: '',
    hscMarks: '',
    error: true,
    success: false,
  };
  const [message, setMessage] = useState('');
  const [formValues, setFormValues] = useState(initialFormState);

  const { fullName, email, password, sscMarks, hscMarks, error, success } =
    formValues;

  const handleChange = (field) => (e) => {
    setFormValues({ ...formValues, error: false, [field]: e.target.value });
  };
  const handleSignup = (e) => {
    e.preventDefault();

    // set hsc and ssc marks to 0 if empty
    if (sscMarks === '') {
      setFormValues({ ...formValues, sscMarks: 0 });
    }
    if (hscMarks === '') {
      setFormValues({ ...formValues, hscMarks: 0 });
    }
    // convert ssc and hsc marks to numbers
    const sscMarksNum = Number(sscMarks);
    const hscMarksNum = Number(hscMarks);

    // console.log(formValues);

    signup({ fullName, email, password, hscMarksNum, sscMarksNum })
      .then((data) => {
        if (data.error) {
          setFormValues({ ...formValues, error: data.err, success: false });
          setMessage(`Student Signup Failed! Error: ${error}`);
        } else {
          setFormValues({
            ...formValues,
            fullName: '',
            email: '',
            password: '',
            hsc: '',
            ssc: '',
            error: '',
            success: true,
          });
          setMessage('Student Signup Successful!');
        }
      })
      .catch((err) => {
        console.log('Error in signing up');
        console.error(err);
      });
  };
  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font flex justify-center items-center w-1/2 mx-auto mt-5 h-[90vh]">
        <form
          className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          onSubmit={handleSignup}
        >
          <div className=" bg-gray-100 rounded-lg flex flex-col md:ml-auto w-full  md:mt-0">
            <h2 className="text-gray-900 text-2xl title-font mb-5">
              Create an account
            </h2>
            <p
              className={`text-3xl font-extrabold ${
                success ? 'text-purple-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
            <p className="my-2">
              Already have an account?{' '}
              <span className="text-purple-500 cursor-pointer font-bold">
                <Link to="/signin">Signin</Link>
              </span>
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                data-ddg-inputtype="identities.fullName"
                required
                value={fullName}
                onChange={handleChange('fullName')}
              />
            </div>
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
            {/* <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                SSC Marks
              </label>
              <input
                type="text"
                id="sscmarks"
                name="sscmarks"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                data-ddg-inputtype="identities.emailAddress"
                data-ddg-autofill="true"
                value={sscMarks}
                onChange={handleChange('sscMarks')}
              />
            </div> */}
            {/* <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                HSC Marks
              </label>
              <input
                type="text"
                id="hscmarks"
                name="hscmarks"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                data-ddg-inputtype="identities.emailAddress"
                data-ddg-autofill="true"
                value={hscMarks}
                onChange={handleChange('hscMarks')}
              />
            </div> */}
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Signup
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
