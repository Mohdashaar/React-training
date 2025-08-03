import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UserList from "./Userlist";
import UserDetails from "./UserDeatails";
import Card from "./Card";



function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand bg-dark p-3">
        <Link to="/" className="btn btn-outline-light m-1">
          Home
        </Link>
        <Link to="/about" className="btn btn-outline-light m-1">
          About
        </Link>
        <Link to="/contact" className="btn btn-outline-light m-1">
          Contact
        </Link>
        <Link to="/users" className="btn btn-outline-light m-1">
          Users
        </Link>

        <Link to="/profile" className="btn btn-outline-light m-1">
          View My Profile
        </Link>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />

             <Route
            path="/profile"
            element={
              <Card
                name="MOHAMMED ASHAAR"
                role="FRONT-END WEB DEVELOPER"
                skills={["HTML", "CSS" , "boostrap", "java-script", "react"]}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;