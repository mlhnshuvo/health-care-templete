import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="w-full md:w-4/12 bg-white border m-auto border-gray-100 p-10 shadow-md">
        <div>
          <form className="space-y-2">
            <div>
              <label>First Name*</label>
              <br />
              <input
                type="text"
                className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label>Last Name*</label>
              <br />
              <input
                type="text"
                className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label>Email*</label>
              <br />
              <input
                type="email"
                className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label>Password*</label>
              <br />
              <input
                type="password"
                className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label>Fill the Recaptcha*</label>
              <br />
              <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
            </div>
            <br />
            <Link to="/login">
              <p className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-3 rounded-full w-full text-center">
                Sign Up
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
