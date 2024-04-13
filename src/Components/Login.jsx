import { useState } from "react";
import Header from "./Header";
import { checkValidData } from "./Utils/validate";
import { useRef } from "react";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // Validation Code
  const [errorMessage, setErrorMessage] = useState(null);
  const validate = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  // Toggle  between Signup and Login Forms

  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const setToggle = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <div className="overflow-auto">
      <Header />
      <div className="absolute">
        <img
          src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876023.jpg?size=626&ext=jpg&ga=GA1.1.710561948.1710229366&semt=ais"
          className="w-screen h-screen"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute p-12 my-24 mx-auto right-0 left-0 text-slate-300 w-3/12  bg-black rounded-lg shadow-xl bg-opacity-80"
      >
        {isSignUpForm ? (
          <div>
            <h1 className="text-white font-bold">Not Registered</h1>
            <h2 className="text-white font-bold">
              Then SIGN UP First to Start 😁
            </h2>
          </div>
        ) : (
          <div>
            <h1 className="text-white font-bold">Already Registered</h1>
            <h2 className="text-white font-bold">
              Then Login First to Start 😁
            </h2>
          </div>
        )}

        {isSignUpForm && (
          <input
            ref={name}
            className="p-2 mt-2  w-full text-black font-bold rounded-lg bg-gray-400 bg-opacity-55 hover:bg-slate-400 hover:bg-opacity-35"
            type="text"
            placeholder="Provide Your Good Name"
          />
        )}
        <input
          ref={email}
          className="p-2 mt-2  w-full text-black font-bold rounded-lg  bg-gray-400 bg-opacity-55  hover:bg-slate-400 hover:bg-opacity-35"
          type="text"
          placeholder="Your Email ID Please"
        />
        <input
          ref={password}
          className="p-2 mt-2 w-full text-black font-bold rounded-lg  bg-gray-400 bg-opacity-55  hover:bg-slate-400 hover:bg-opacity-35"
          type="password"
          placeholder="Enter your Secrete Password"
        />

        <button
          className="p-2 mt-2 my-6 w-full bg-gradient-to-r from-blue-500 to-blue-900 text-black font-bold rounded-lg hover:bg-gradient-to-l hover:from-lime-300 hover:to-lime-500"
          onClick={validate}
        >
          {isSignUpForm ? "SIGN UP" : "SIGN IN"}
        </button>

        <p className="text-red-600 font-mono font-bold">{errorMessage}</p>

        <p className="text-white font-bold">
          {isSignUpForm
            ? "Already Our User Then LOG IN"
            : "Visiting First Time,then Register First"}

          <button
            className="p-2 mt-2 my-6 w-full bg-gradient-to-r from-blue-500 to-blue-900 text-black font-bold rounded-lg hover:bg-gradient-to-l hover:from-lime-300 hover:to-lime-500"
            onClick={setToggle}
          >
            {isSignUpForm ? "LOG IN" : "REGISTER"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
