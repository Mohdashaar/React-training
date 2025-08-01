import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";


function App() {
  return (
       <BrowserRouter>
       <nav className="navbar navbar-expand bg-dark p-3">
        <Link to="/" className="btn btn-outline-light bg-light m-1">
          Home </Link>
        <Link to="About" className="btn btn-outline-light bg-dark m-1">
          About </Link>
        <Link to="Contact" className="btn btn-outline-light bg-dark m-1">
          Contact </Link>
       
       </nav>
       <div className="container mt-5">
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="About" element={<About />}/>
         <Route path="Contact" element={<Contact />}/>
        </Routes>
       </div>
       
       </BrowserRouter>
  );
}
export default App;