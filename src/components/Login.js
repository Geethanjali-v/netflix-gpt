import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { LOGO, ProfURL } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    // const handleButtonClick = () => {
    //   // Validate the form data
    //   //    checkValidData(email, password);
    //   const message = checkValidData(
    //     email.current?.value,
    //     password.current?.value,
    //     !isSignInForm ? name.current?.value : null
    //   );
    setErrorMessage(message);
    if (message) return;
    //create a new user , sign in/sign up

    if (!isSignInForm) {
      console.log("Creating user...");
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:ProfURL,
          })
            .then(() => {
            
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
              // An error occurred
              // ...
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //    setErrorMessage(errorCode + "" + errorMessage);
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    }

    //Sign in / Sign Up
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGO}
          alt="login"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-md shadow-lg"
      >
        <h1 className=" font-bold text-3xl py-4 text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        )}
        <input
          ref={email}
          type="text"
          autoComplete="email"
          placeholder="Email Address"
          className="p-3 my-3 w-full rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete={isSignInForm ? "current-password" : "new-password"}
          className="p-3 my-3  w-full rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-3 my-3 bg-red-700 hover:bg-red-800 w-full text-white font-semibold rounded-md transition duration-200"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now.."}
        </p>
      </form>
    </div>
  );
};
export default Login;
