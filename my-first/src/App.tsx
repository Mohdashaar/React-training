import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UserList from "./Userlist";
import UserDetails from "./UserDeatails";
import Card from "./Card";
import Books2 from "./Books2";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./product";
import PostList2 from "./postlist2";
import Asi10 from "./asi10";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mt-4 minHt">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/posts" element={<PostList2 />} />
          <Route path="/books" element={<Books2 />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/recipt" element={<Asi10 />} /> 
          <Route
            path="/profile"
            element={
              <Card
                name="MOHAMMED ASHAAR"
                role="FRONT-END WEB DEVELOPER"
                skills={["HTML", "CSS", "boostrap", "java-script", "react"]}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
