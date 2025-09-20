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
  const handleChange =(event)=>{
    setError('')
    setSuccess('')
   
    setFormData((formData)=>({
      ...formData,
      [event.target.name]:event.target.value


    }))
    setErrors((errors)=>({
      ...errors,
      [event.target.name]:""


    }))
  }
  const handlePassword = () => {
    setShowPassword((password) => !password);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword((password) => !password);
  };
  const [formData,setFormData]=useState({
    fullname:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const [errors,setErrors]=useState({
      fullname:'',
      email:'',
      password:'',
      confirmpassword:''
  })
const [success,setSuccess]=useState('');
const [error,setError]=useState('');
const handleSubmit=()=>{
  event.preventDefault();

  let newerrors={}
  if(!formData.fullname){
    newerrors.fullname="please enter your full name";
  }
   if(!formData.email){
    newerrors.email="please enter your email";
  }
   if(!formData.password){
    newerrors.password="please enter your password";
  }
   if(!formData.confirmpassword){
    newerrors.confirmpassword="please confirm password";
  }else if(formData.password!= formData.confirmpassword){
    newerrors.confirmpassword="your password did not match"
  }
  if(Object.keys(newerrors).length>0){
    setErrors(newerrors)
  }
  else{
      setSuccess("your account is created successfully");
   setError('')
     setFormData({
      fullname:'',
    email:'',
      password:'',     
        confirmpassword:''
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

        <div className="h-190 pb-30 flex-col p-20 mt-5 bg-white w-130 flex items-center justify-center rounded-2xl  shadow-2xl shadow-blue-500 ">
                  <form onSubmit={handleSubmit}>
          <p className=" pr-70 font-medium ">Full Name:</p>
          <div className="relative">
            <input
              type="text"
              value={formData.fullname}
              onChange={handleChange}
              name="fullname"
               
              className="border-2 cursor-pointer pl-10 rounded-2xl w-110 h-10"
              placeholder="Enter your full name"
            />
            {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
            &nbsp;
            <User className="absolute top-2 pl-1 left-2  text-gray-500" />
          </div>
          <p className="pr-63 font-medium">Email Address:</p>
          <div className="relative">
            <input
              type="email"
               
              value={formData.email}
              name="email"
               onChange={handleChange}
              className="border-2 cursor-pointer pl-10 rounded-2xl w-110 h-10"
              placeholder="Enter your email address"
            /> {errors.email && <p className="text-red-500">{errors.email}</p>}
            &nbsp;
            <Mail className="absolute top-2 pl-1 left-2 text-gray-500" />
          </div>
          <p className="pr-70 font-medium">Password:</p>
          <div className="relative">
            <input
            name="password"
            value={formData.password}
             onChange={handleChange}
              
              type={showPassword ? "text" : "password"}
              className="border-2 cursor-pointer pl-10 rounded-2xl w-110 h-10"
              placeholder="Create a strong password"
            />
            &nbsp;  
            <p onClick={handlePassword}>
              {showPassword ? (
                <Eye className="absolute top-2 pl-1 right-5 cursor-pointer text-gray-500" />
              ) : (
                <EyeOff className="absolute top-2 pl-1 right-5 cursor-pointer text-gray-500" />
              )}
            </p>
            <LockKeyhole className="absolute top-2 pl-1 left-2 text-gray-500" />
          </div> {errors.password && <p className="text-red-500">{errors.password}</p>}
          <p className="pr-56 font-medium">Confirm Password:</p>
          <div className="relative">
            <input
            name="confirmpassword"
            
            value={formData.confirmpassword}
             onChange={handleChange}
              type={showConfirmPassword ? "text" : "password"}
              className="border-2 cursor-pointer pl-10 rounded-2xl w-110 h-10"
              placeholder="Create a strong password"
            />
            &nbsp;
            <p onClick={handleConfirmPassword}>
              {showConfirmPassword ? (
                <Eye className="absolute top-2 pl-1 right-5 cursor-pointer text-gray-500" />
              ) : (
                <EyeOff className="absolute top-2 pl-1 right-5 cursor-pointer text-gray-500" />
              )}
            </p>
            <LockKeyhole className="absolute top-2 pl-1 left-2 text-gray-500" />
          </div> {errors.confirmpassword && <p className="text-red-500">{errors.confirmpassword}</p>}
          <div className="flex border-1 flex justify-center items-center rounded-2xl h-15 p-2 bg-indigo-50">
            <input type="checkbox" className="hover:cursor-pointer" />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p>
              I agree to the{" "}
              <span className="font-medium text-violet-700 ">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="font-medium text-violet-700 ">
                Privacy Policy
              </span>
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          &nbsp;
          <div className="flex flex-col gap-5">
            <div className="relative">
          {error && <p className="bg-red-400 shadow-2xl shadow-red-400 flex items-center justify-center gap-5  w-110 h-10 rounded-2xl text-xl hover:bg-red-500  hover:cursor-pointer ">{error}</p>}
           {/* <TriangleAlert className="absolute top-2 left-15" /> */}
          </div>
          {success && <p className="bg-green-400 shadow-2xl shadow-green-400 flex items-center justify-center gap-5  w-110 h-10 rounded-2xl text-xl hover:bg-green-500  hover:cursor-pointer ">{success}</p>}
          </div>&nbsp;
          <button type="submit" className="bg-violet-700 flex items-center justify-center gap-5  w-110 h-10 rounded-2xl text-xl hover:bg-violet-800  hover:cursor-pointer  text-neutral-50">
            {" "}
            <CircleUser />
            Create Account
          </button>
          </form>
          &nbsp;
          <div className="border-b-1 w-100"></div>&nbsp;
          <div className="flex">
            <p>Already have an account? </p> &nbsp;&nbsp;{" "}
            <Link
              to="/signin"
              className="font-bold cursor-pointer text-violet-600"
            >
              Sign in here
            </Link>
          </div>
          &nbsp;
          <Link
            to="/home"
            className="bg-gray-50 flex justify-center gap-1 hover:bg-gray-200 cursor-pointer  hover:text-gray-700 text-gray-600 h-10 w-40 rounded-2xl font-bold"
          >
            {" "}
            <ArrowLeft />
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
export default Signup;
