import { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { useRef } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  // For navigation into different pages we can use the useNavigate Hook provided by react router dom
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // dispatch
  const dispatch = useDispatch();

  // Toggle  between Signup and Login Forms

  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const setToggle = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  // Validation Code
  const [errorMessage, setErrorMessage] = useState(null);
  const validate = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // sign up code
    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //update the profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // sign In

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
        });
    }
  };

  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="overflow-auto">
      <Header />
      {/* <div className="absolute">
        <img
          src="https://img.freepik.com/free-photo/movie-background-collage_23-2149876023.jpg?size=626&ext=jpg&ga=GA1.1.710561948.1710229366&semt=ais"
          className="w-screen h-screen"
          alt=""
        />
      </div> */}

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute p-12 my-16 mx-auto right-0 left-0 text-slate-300 w-3/12  bg-gradient-to-br from-blue-700 to-blue-950 border-slate-950 border-2 rounded-lg shadow-xl bg-opacity-80"
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

        <p className="ml-32 pb-2">OR</p>
        <button
          className="p-2  bg-gradient-to-br from-cyan-600 to-blue-700 w-full rounded-xl text-black font-semibold hover:bg-gradient-to-l hover:from-lime-300 hover:to-lime-500"
          onClick={handleGoogle}
        >
          SIGN IN WITH GOOGLE
        </button>
      </form>
    </div>
  );
};

export default Login;
