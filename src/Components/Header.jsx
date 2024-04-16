import { useSelector } from "react-redux";
import logo from "../Utils/Images/logo.png";
import man from "../Utils/Images/man.png";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  //subscribe to the redux store

  const user = useSelector((store) => store.user);

  //Signout API from Firebase
  // Navigate to main Page
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="">
        <img src={logo} className="h-32" />
      </div>
      {user && (
        <div className="p-2 m-4">
          <img src={man} alt="" className="h-16" />
          <p className="text-white font-semibold m-1">{user.displayName}</p>
          <button
            className="text-white bg-gradient-to-br from-cyan-500 to-cyan-900 p-1 mt-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from bg-red-500  hover:to-red-900"
            onClick={handleSignOut}
          >
            SIGN OUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
