function App() {
  return (
    <>

      <div className="bg-indigo-50 flex h-screen items-center justify-center">
        <div className="absolute bg-white h-30 min-w-screen top-0 flex justify-evenly p-10">
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
          <p className="bg-blue-600 hover:bg-blue-800 hover:cursor-pointer text-fuchsia-50 font-bold text-xl rounded-2xl pl-3 pt-1 w-25"> Sign Up</p>

        </div>
        <div className="h-125  flex-col bg-white w-110 flex items-center justify-center rounded-2xl  shadow-2xl shadow-blue-500 ">
          <h1 className="font-bold text-2xl ">Sign In</h1>&nbsp;
          <p className="">Access Your Account</p>
          <p className="pr-55 font-medium">Email Address:</p>
          <input type="email" className="border-2 p-7 rounded-2xl w-80 h-13" placeholder="sample@gmail.com" />&nbsp;

          <p className="pr-55 font-medium">Password:</p>
          <input type="password" className="border-2 p-7 rounded-2xl w-80 h-13" placeholder="sample@gmail.com" />&nbsp;
          <div className="flex">
            <input type="checkbox" className="hover:cursor-pointer" /> &nbsp;&nbsp;&nbsp;&nbsp;<p>Remember me</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="text-blue-800 font-medium"> Forgot Password ?</a>
          </div>&nbsp;
          <button className="bg-blue-700 w-95 h-10 rounded-2xl text-xl hover:bg-blue-800 hover:h-12 hover:w-98 hover:cursor-pointer text-neutral-50">Sign In</button>&nbsp;
          <div className="border-b-1 w-100"></div>&nbsp;
          <div className="flex">
            <p>Don't have an account? </p> &nbsp;&nbsp; <a href="" className="font-bold cursor-pointer text-blue-600">Create one here</a>
          </div>
        </div>


      </div>
      
    </>
  )
}
export default App;