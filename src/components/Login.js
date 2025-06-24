import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
          alt="login"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-md shadow-lg">
        <h1 className=" font-bold text-3xl py-4 text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 w-full rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3  w-full rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button className="p-3 my-3 bg-red-700 hover:bg-red-800 w-full text-white font-semibold rounded-md transition duration-200">
          Sign In
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign Up Now.."}
        </p>
      </form>
    </div>
  );
};
export default Login;
