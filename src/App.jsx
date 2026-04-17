import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignInSide from "./Pages/SignInSide";
import SignUpSide from "./Pages/SignUpSide";

export default function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signUP" element={<SignUpSide />} />
        <Route path="/Home" element={<Home />} />
        
      </Routes>
    </Router>
  )
}
