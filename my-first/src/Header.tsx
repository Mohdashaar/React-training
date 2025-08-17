
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header className="bg-dark text-white">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <NavLink className="navbar-brand" to="/">
          My-first App
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact"  className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users"  className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }>
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/posts"  className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }>
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/books"  className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }>
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products"  className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile"  className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }>
                Profile
              </NavLink>
            </li>

          <li className="nav-item">
              <NavLink
                to="/recipt"
                className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }
              >
                Recipes
              </NavLink>
            </li>
          <li className="nav-item">
              <NavLink
                to="/Courses"
                className={(navData) =>
                  "nav-link" + (navData.isActive ? " active text-warning" : "")
                }
              >
                Courses
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
