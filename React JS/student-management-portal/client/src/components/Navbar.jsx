import {
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          CVR College
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="nav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/register"
              >
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>

          <button
            onClick={logout}
            className="btn btn-danger ms-3"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;