import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { LogIn } from "lucide-react";
import Navbar from "./Navbar.jsx";
function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword((password) => !password);
  };

  return (
    <>
      <div className="bg-indigo-50 flex h-screen items-center flex-col">
        <Navbar />
        <div className="h-125 mt-50  flex-col bg-white w-110 flex items-center justify-center rounded-2xl  shadow-2xl shadow-blue-500 ">
          <h1 className="font-bold text-2xl ">Sign In</h1>&nbsp;
          <p className="">Access Your Account</p>
          <p className="pr-55 font-medium">Email Address:</p>
          <div className="relative">
            <input
              type="email"
              className="border-2  pl-10 rounded-2xl w-80 h-13"
              placeholder="sample@gmail.com"
            />
            &nbsp;
            <Mail className="absolute top-4 pl-1 left-2 text-gray-500" />
          </div>
          <p className="pr-55 font-medium">Password:</p>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border-2 cursor-pointer pl-10 rounded-2xl w-80 h-13"
              placeholder="sample123"
            />
            &nbsp;
            <p onClick={handlePassword}>
              {showPassword ? (
                <Eye className="absolute top-4 pl-1 right-5 cursor-pointer text-gray-500" />
              ) : (
                <EyeOff className="absolute top-4 pl-1 right-5 cursor-pointer text-gray-500" />
              )}
            </p>
            <LockKeyhole className="absolute top-4 pl-1 left-2 text-gray-500" />
          </div>
          <div className="flex">
            <input type="checkbox" className="hover:cursor-pointer" />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;<p>Remember me</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="text-blue-800 font-medium">
              {" "}
              Forgot Password ?
            </a>
          </div>
          &nbsp;
          <button className="bg-blue-700 w-95 h-10 rounded-2xl gap-3 text-xl flex justify-center hover:bg-blue-800 hover:h-12 hover:w-98 hover:cursor-pointer text-neutral-50">
            {" "}
            <LogIn className="pt-1" />
            Sign In
          </button>
          &nbsp;
          <div className="border-b-1 w-100"></div>&nbsp;
          <div className="flex">
            <p>Don't have an account? </p> &nbsp;&nbsp;{" "}
            <Link
              to="/signup"
              className="font-bold cursor-pointer text-blue-600"
            >
              Create one here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
