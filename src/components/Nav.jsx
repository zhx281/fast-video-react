import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          <h5>Fast Video</h5>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
