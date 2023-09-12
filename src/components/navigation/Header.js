import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Hamburger } from "../humburger/Humburger";
import { NavBar } from "../navBar/NavBar";
import "./header.css";

export const Header = ({hamburgerIsOpen, setHamburgerOpen}) => {
  const location = useLocation();

  const [url, setUrl] = useState(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerIsOpen);
  };

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className="header">
      <img className="spasexImg" src="https://logodix.com/logo/358.jpg" />
      <NavBar hamburgerIsOpen={hamburgerIsOpen}/>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerIsOpen} />
      </div>
    </div>
  );
};
