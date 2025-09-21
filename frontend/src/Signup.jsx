import { Link } from "react-router-dom";
import {
  CircleUser,
  Eye,
  TriangleAlert,
  LockKeyhole,
  User,
  Mail,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import Navbar from "./Navbar.jsx";
import { useState } from "react";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleChange = (event) => {
    setError('')
    setSuccess('')

    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value


    }))
    setErrors((errors) => ({
      ...errors,
      [event.target.name]: ""


    }))
  }
  const handlePassword = () => {
    setShowPassword((password) => !password);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword((password) => !password);
  };
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: ""
  })
  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    event.preventDefault();

    let newerrors = {}
    if (!formData.fullname) {
      newerrors.fullname = "please enter your full name";
    }
    if (!formData.email) {
      newerrors.email = "please enter your email";
    }
    if (!formData.password) {
      newerrors.password = "please enter your password";
    }
    if (!formData.confirmpassword) {
      newerrors.confirmpassword = "please confirm password";
    } else if (formData.password != formData.confirmpassword) {
      newerrors.confirmpassword = "your password did not match"
    }
    if (Object.keys(newerrors).length > 0) {
      setErrors(newerrors)
    }
    else {
      setSuccess("your account is created successfully");
      setError('')
      setFormData({
        fullname: '',
        email: '',
        password: '',
        confirmpassword: ''
      })
    }

    //   if(!formData.password || !formData.email || !formData.password || !formData.confirmpassword){
    //     setError("please fill all the fields");
    //     setSuccess('');
    //   }else if(formData.password!=formData.confirmpassword){
    //     setError("your password is doesnt matched");

    //   }
    //   else{
    //     setSuccess("your account is created successfully");
    //     setError('')
    //      setFormData({
    //       fullname:'',
    //       email:'',
    //       password:'',
    //       confirmpassword:''
    //     })
    //   }
  }
  return (
    <>
      <div className="bg-indigo-50 flex flex-col  mt-8 h-screen items-center justify-center">
        <Navbar />
        <div className="flex mt-2 font-bold text-4xl  text-violet-700">
          Join BlogVerse
        </div>{" "}
        &nbsp;
        <p className="font-medium text-xl">
          Create your account and start your blogging journey today
        </p>

        <div className="h-auto pb-10 md:pb-20  flex-col p-5 md:p-10 mt-5 bg-white w-full md:w-1/2 xl:w-1/3 flex items-center justify-center rounded-2xl shadow-2xl shadow-blue-500 mx-auto">
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="w-4/5">
              <p className=" font-medium text-sm md:text-base">Full Name:</p>
              <div className="relative mb-4">
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={handleChange}
                  name="fullname"
                  className="border-2 cursor-pointer  pl-10 md:pl-14 rounded-2xl w-full h-10"
                  placeholder="Enter your full name"
                />
                {errors.fullname && <p className="text-red-500 text-xs md:text-sm">{errors.fullname}</p>}
                <User className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500" />
              </div>

            </div>
              <div className="w-4/5">
            <p className="pr-5 md:pr-10 font-medium text-sm md:text-base">Email Address:</p>
            <div className="relative mb-4">
              <input
                type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                className="border-2 cursor-pointer pl-10 md:pl-14 rounded-2xl w-full  h-10"
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-xs md:text-sm">{errors.email}</p>}
              <Mail className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500" />
            </div>
</div>
  <div className="w-4/5">
            <p className="pr-5 md:pr-10 font-medium text-sm md:text-base">Password:</p>
            <div className="relative mb-4">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                className="border-2 cursor-pointer pl-10 md:pl-14 rounded-2xl w-full  h-10"
                placeholder="Create a strong password"
              />
              <p onClick={handlePassword}>
                {showPassword ? (
                  <Eye className="absolute top-1/2 transform -translate-y-1/2 right-5 md:right-5 cursor-pointer text-gray-500" />
                ) : (
                  <EyeOff className="absolute top-1/2 transform -translate-y-1/2 right-5 md:right-5 cursor-pointer text-gray-500" />
                )}
              </p>
              <LockKeyhole className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500" />
            </div>
            {errors.password && <p className="text-red-500 text-xs md:text-sm">{errors.password}</p>}
</div>
  <div className="w-4/5">
            <p className="pr-5 md:pr-10 font-medium text-sm md:text-base">Confirm Password:</p>
            <div className="relative mb-4">
              <input
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                type={showConfirmPassword ? "text" : "password"}
                className="border-2 cursor-pointer pl-10 md:pl-14 rounded-2xl w-full  h-10"
                placeholder="Confirm your password"
              />
              <p onClick={handleConfirmPassword}>
                {showConfirmPassword ? (
                  <Eye className="absolute top-1/2 transform -translate-y-1/2 right-5 md:right-5 cursor-pointer text-gray-500" />
                ) : (
                  <EyeOff className="absolute top-1/2 transform -translate-y-1/2 right-5 md:right-5 cursor-pointer text-gray-500" />
                )}
              </p>
              <LockKeyhole className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500" />
            </div>
            {errors.confirmpassword && <p className="text-red-500 text-xs md:text-sm">{errors.confirmpassword}</p>}
</div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="hover:cursor-pointer" />
              <p className="text-sm md:text-base ml-2">
                I agree to the{" "}
                <span className="font-medium text-violet-700">Terms of Service</span> and{" "}
                <span className="font-medium text-violet-700">Privacy Policy</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-4">
              {error && (
                <p className="bg-red-400 shadow-2xl shadow-red-400 flex items-center justify-center gap-5 w-full h-10 rounded-2xl text-sm md:text-lg hover:bg-red-500 cursor-pointer text-white">
                  {error}
                </p>
              )}
              {success && (
                <p className="bg-green-400 shadow-2xl shadow-green-400 flex items-center justify-center gap-5 w-full h-10 rounded-2xl text-sm md:text-lg hover:bg-green-500 cursor-pointer text-white">
                  {success}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-violet-700 flex items-center justify-center gap-5 w-full md:w-4/5 h-10 rounded-2xl text-sm md:text-xl hover:bg-violet-800 hover:cursor-pointer text-neutral-50"
            >
              <CircleUser />
              Create Account
            </button>
          </form>

          <div className="border-b-1 w-full my-4"></div>

          <div className="flex justify-center text-sm md:text-base">
            <p>Already have an account? </p>
            <Link to="/signin" className="font-bold text-violet-600 ml-2">
              Sign in here
            </Link>
          </div>

          <div className="mt-4">
            <Link
              to="/home"
              className="bg-gray-50 flex justify-center gap-2 hover:bg-gray-200 cursor-pointer hover:text-gray-700 text-gray-600 h-10 w-full md:w-40 rounded-2xl font-bold"
            >
              <ArrowLeft />
              Back to home
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
export default Signup;
