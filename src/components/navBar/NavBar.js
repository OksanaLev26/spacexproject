import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navBar.css";

export const NavBar = ({ hamburgerIsOpen, setHamburgerOpen }) => {
  const location = useLocation();

  const [url, setUrl] = useState(null);

  const handleLinkClick = () => {
    return hamburgerIsOpen ? setHamburgerOpen(!setHamburgerOpen) : null;
  }

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className={hamburgerIsOpen ? "burgerAll" : "navAll"}>
      <Link to="/" className={url === "/" ? "active" : ""} onClick={handleLinkClick}>
        <div className="navItem">Homepage</div>
      </Link>
      <Link to="/crew" className={url?.includes("crew") ? "active" : ""} onClick={handleLinkClick}>
        <div className="navItem">Crew</div>
      </Link>
      <Link to="/dragons" className={url?.includes("dragons") ? "active" : ""} onClick={handleLinkClick}>
        <div className="navItem">Dragons</div>
      </Link>
      <Link to="/capsules" className={url === "/capsules" ? "active" : ""} onClick={handleLinkClick}>
        <div className="navItem">Capsules</div>
      </Link>
    </div>
  );
};
