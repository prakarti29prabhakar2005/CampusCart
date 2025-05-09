import CampusCart from "../Auth/CampusCartLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const serviceProvider = JSON.parse(localStorage.getItem("serviceProvider"));
  const serviceProviderId = serviceProvider?._id;

  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={CampusCart} style={{ width: "150px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                CampusCart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/service-provider-dashboard"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    Orders
                  </Link>
                </li>
              </ul>
            </div>
            <div className="offcanvas-footer mt-auto p-3 w-100">
              <button
                className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center"
                title="Logout"
                onClick={() => {
                  localStorage.removeItem("serviceProvider");
                  window.location.href = "/login";
                }}
              >
                <i
                  className="bi bi-box-arrow-right me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
