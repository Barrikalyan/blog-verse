import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (


    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />


    </Routes>

  )
}
export default App;
