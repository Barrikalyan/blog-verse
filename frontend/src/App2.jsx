function App2() {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col h-screen items-center justify-center">
        <div className=" bg-white h-30 min-w-screen top-0 flex justify-evenly p-10">
          <div className="flex"><img src="./logo.png" alt="logo" />
            <p className="font-bold text-2xl">
              BlogVerse
            </p>
          </div>
          <p>
            Home
          </p>
          <p>
            Sign In
          </p>
          <p className="bg-blue-600 hover:bg-blue-800 hover:cursor-pointer text-fuchsia-50 font-bold text-xl rounded-md pl-3 pt-1 w-25"> Sign Up</p>

        </div>
            <div className="flex font-bold text-4xl text-violet-700">Join BlogVerse</div>  &nbsp;
            <p className="font-medium text-xl">Create your account and start your blogging journey today</p>
        
        <div className="h-180 pb-30 flex-col p-20 bg-white w-130 flex items-center justify-center rounded-2xl  shadow-2xl shadow-blue-500 ">
          <p className="pr-55 font-medium ">Full Name:</p>
          <input type="text" className="border-2 p-7 rounded-2xl w-80 h-13" placeholder="Enter your full name" />&nbsp;

          <p className="pr-55 font-medium">Email Address:</p>
          <input type="email" className="border-2 p-7 rounded-2xl w-80 h-13" placeholder="Enter your email address" />&nbsp;
          <p className="pr-55 font-medium">Confirm Password:</p>
          <input type="password" className="border-2 p-7 rounded-2xl w-80 h-13" placeholder="Create a strong password" />&nbsp;
  <p className="pr-55 font-medium">Password:</p>
          <input type="password" className="border-2 p-7 rounded-2xl w-80 h-13" placeholder="Create a strong password" />&nbsp;
  
          <div className="flex border-1 rounded-2xl h-20 p-2 bg-indigo-50">
            <input type="checkbox" className="hover:cursor-pointer" /> &nbsp;&nbsp;&nbsp;&nbsp;<p>I agree to the <span className="font-medium text-violet-700 ">Terms of Service</span> and <span className="font-medium text-violet-700 ">Privacy Policy</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>&nbsp;
          <button className="bg-violet-700 w-95 h-10 rounded-2xl text-xl hover:bg-violet-800 hover:h-12 hover:w-98 hover:cursor-pointer text-neutral-50">Create Account</button>&nbsp;
          <div className="border-b-1 w-100"></div>&nbsp;
          <div className="flex">
            <p>Already have an account? </p> &nbsp;&nbsp; <a href="" className="font-bold cursor-pointer text-violet-600">Sign in here</a>

          </div>&nbsp;
          <button className="bg-gray-50 hover:bg-gray-200 cursor-pointer hover:text-gray-700 text-gray-600 h-20 w-40 rounded-2xl font-bold" > Back to home</button>
        </div>


      </div>
    </>
  )
}
export default App2;