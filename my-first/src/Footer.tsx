function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-3 border-top d-flex flex-wrap justify-content-between align-items-center">
        
       
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
            aria-label=""
          >
            <i className=" bi fs-3"></i>
          </a>
          <span className="mb-3 mb-md-0">© 2025 Copyright</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href="#" aria-label="Instagram">
              <i className="bi bi-instagram fs-5"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href="#" aria-label="Facebook">
              <i className="bi bi-facebook fs-5"></i>
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}

export default Footer;
