import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 rounded-lg bg-gray-200 p-8 m-8">
        <p className="text-center text-2xl font-bold">Signup</p>
        <form className="mt-6">
          <div className="mt-1 text-sm leading-6">
            <label htmlFor="name" className="block text-black mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="w-full rounded-md border border-gray-700 bg-gray-200 p-3 text-black focus:border-indigo-500"
            />
          </div>
          <div className="mt-1 text-sm leading-6">
            <label htmlFor="email" className="block text-black mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-700 bg-gray-200 p-3 text-black focus:border-indigo-500"
            />
          </div>
          <div className="mt-1 text-sm leading-6">
            <label htmlFor="password" className="block text-black mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-700 bg-gray-200 p-3 text-black focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-custom-darkestblue py-3 text-white font-semibold rounded-md"
          >
            Sign up
          </button>
        </form>
        <div className="flex items-center pt-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <p className="px-3 text-sm text-black">OR</p>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            aria-label="Log in with Google"
            className="p-3 bg-transparent rounded-md border-none ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button
            aria-label="Log in with Twitter"
            className="p-3 bg-transparent rounded-md border-none ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 32 32"
            >
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
            </svg>
          </button>
          <button
            aria-label="Log in with GitHub"
            className="p-3 bg-transparent rounded-md border-none ml-2"
          >
           <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" className="h-6 mb-1"/> 
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-black">
          Already have an account?
          <Link to="/login" className="text-blue-600 hover:underline font-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
