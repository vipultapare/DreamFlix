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
  // For dispatching an action from the store
  const dispatch = useDispatch();

  const [isSignOut, isSetSignOut] = useState(false);

  //subscribe to the redux store

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

  return (
    <div className="flex justify-between bg-gradient-to-b from-blue-950 to-blue-900 bottom-2 border-b-violet-950 w-full">
      <div className="">
        <img src={logo} className="h-32 xsm:h-20" />
      </div>

      <div className="text-blue-600  uppercase font-light font-bold text-6xl mr-4 mt-5 p-2 cursor-default xsm:text-2xl">
        <h1>DreamFlix</h1>
      </div>
      {user && (
        <div className="mt-4 mb-4 mr-6 flex flex-col">
          <img
            onClick={openSignOut}
            src={man}
            alt=""
            className=" ml-8 h-16 w-16"
          />
          <p className="text-white font-semibold justify-center cursor-pointer">
            Welcome {user.displayName}
          </p>
          {isSignOut && (
            <button
              className="text-white bg-gradient-to-br from-cyan-500 to-cyan-900 p-1 mt-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from bg-red-500  hover:to-red-900"
              onClick={handleSignOut}
            >
              SIGN OUT
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
