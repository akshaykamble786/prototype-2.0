import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              className="text-4xl flex items-center font-bold text-gray-800 lg:text-2xl"
              to="/"
            >
              ELEKTRA
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-3">
                  <Link to="/" className="hover:underline">
                    About ELEKTRA
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="hover:underline">
                    Help & Support
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="hover:underline">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="hover:underline">
                    Return Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/" className="hover:underline">
                    E-Waste
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ml-4">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Products
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-3">
                  <Link to="#" className="hover:underline">
                    Smartphones
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">
                    Home Appliances
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">
                    Computers
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">
                    Tablets
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">
                    Accessories
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">
                    Wearables
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">
                    Cameras
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 ELEKTRA. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>

            <Link
              to="https://github.com/akshaykamble786/prototype-2.0"
              target="_blank"
              className="text-gray-500"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>

            <Link to="#" className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 30 30"
              >
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
