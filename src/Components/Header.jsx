import { useSelector } from "react-redux";
import logo from "../Utils/Images/logo.png";
import man from "../Utils/Images/man.png";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isSignOut, isSetSignOut] = useState(false);

  const user = useSelector((store) => store.user);

  //Signout API from Firebase
  // Navigate to main Page
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const openSignOut = () => {
    isSetSignOut(!isSignOut);
  };

  // onAuthChange
  // This code is for the dispatching an action for the App store to store and remove the information of user on every sign in , sign up , sign out in our store..
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  // const handleGptOption = () => {
  //   // setIsGptOn(!isGptOn);
  //   dispatch(toggleGptSearchView());
  // };

  return (
    <div className="flex  md:flex-row justify-between bg-gradient-to-b from-blue-950 to-blue-900 bottom-2 border-b-violet-950 w-full">
      <div className="mx-auto md:mx-0">
        <img src={logo} alt="img" className=" h-20 md:h-32" />
      </div>

      <div className="text-blue-600  uppercase  font-bold text-3xl md:text-6xl mr-4 mt-5 p-2 cursor-default mx-auto md:mx-0">
        <h1>DreamFlix</h1>
      </div>
      {user && (
        <div className="flex justify-between gap-6 mx-auto md:mx-0">
          {/* <div className="mt-9 pr-6 bg-gradient-to-br from-green-500 to-green-900 rounded-xl h-10 w-18 hover:bg-gradient-to-b hover:from-green-950 ">
            <button
              className=" flex justify-center pt-2 ml-3  text-white font-semibold "
              onClick={handleGptOption}
            >
              {isGPTOn ? "HOME" : "GPT"}
            </button>
          </div> */}
          <div className="mt-4 mb-4 mr-6 flex flex-col">
            <img
              onClick={openSignOut}
              src={man}
              alt=""
              className=" h-10 md:h-16 w-10 md:w-16   flex justify-center"
            />
            <p className="text-white font-semibold justify-center cursor-pointer  text-center hidden md:inline-block">
              Welcome
            </p>
            <p className="text-white font-semibold justify-center cursor-pointer  text-center text-sm">
              {user.displayName}
            </p>
            {isSignOut && (
              <button
                className="text-white bg-gradient-to-br from-cyan-500 to-cyan-900 p-1 mt-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from bg-red-500  hover:to-red-900 text-sm"
                onClick={handleSignOut}
              >
                SIGN OUT
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
