import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light shadow-sm"
        style={{ backgroundColor: "#ceffb8" }}
      >
        <div className="container">
          {/* Logo */}
          <img
            className="mb-3"
            src="/imfralogo.png"
            alt="Logo"
            style={{ height: "70px" }}
          />

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 400 }}
          >
            <ul
              className="navbar-nav"
              style={{ gap: "15px", display: "flex", alignItems: "center" }}
            >
              <li className="nav-item">
                <Link className="nav-link nav-text" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-text" to="events">
                  Events
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link nav-text" to="gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-text" to="aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-success text-white ms-lg-3"
                  href="#"
                  style={{ padding: "5px 15px" }}
                >
                  Join Us!
                </a>
              </li>
              <li className="nav-item ms-4">
                <button
                  className="btn btn-outline-success d-flex align-items-center"
                  style={{
                    borderWidth: "2px",
                    fontSize: "14px",
                    padding: "5px 10px",
                    fontWeight: 600,
                  }}
                >
                  <i
                    className="bi bi-globe me-2"
                    style={{ fontSize: "16px" }}
                  ></i>
                  DE
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
