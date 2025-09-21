import { Link } from "react-router-dom"
import { House } from 'lucide-react';

function Navbar(){
    return(
        <>
         <div className=" bg-white h-30  cursor-pointer min-w-screen flex justify-evenly p-10">
          <div className="flex"><img src="./logo.png" alt="logo" />
            <p className="font-bold text-2xl">
              BlogVerse
            </p>
          </div>
          <div className="relative">
          <Link to ="/">
            Home
          </Link>    <House className="absolute bottom-4 right-12"/>
          </div>
          <Link to="/signin">
            Sign In
          </Link>
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-800 hover:cursor-pointer text-fuchsia-50 font-bold text-xl rounded-md pl-3 pt-1 w-25"> Sign Up</Link>

        </div>
   
        </>
    )
}

export default Navbar;
