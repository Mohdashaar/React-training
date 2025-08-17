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
import PostList4 from "./postlist4-5";
import RecipeSearch from "./RecipeSearch";
import Courselist3 from "./Courselist3";
import CourseAdd from "./CourseAdd";



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
          <Route path="/posts" element={<PostList4 />} />
          {/* <Route path="/posts" element={<PostList3 />} /> */}
          <Route path="/books" element={<Books2 />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/recipt" element={<RecipeSearch />} /> 
          <Route path="/courses" element={<Courselist3 />} /> 
           <Route path="/add-course" element={<CourseAdd />} />
         

          <Route
            path="/profile"
            element={
              <Card
                name="MOHAMMED ASHAAR"
                role="FRONT-END WEB DEVELOPER"
                skills={["HTML", "CSS", "bootstrap", "java-script", "react"]}
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
