import { NavBar } from "../navBar/NavBar";
import "./burgerMenu.css";

export const BurgerMenu = ({ hamburgerIsOpen, setHamburgerOpen }) => {
  return (
    <div className="burgerMenu">
      <NavBar
        hamburgerIsOpen={hamburgerIsOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
      <img
        className="cancelCross"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZYQ-W43pMm0OeS1apXdGSP-Exy95E-Fihv2Ie4VCQWPwx8Z-JQJ2hfFqYl-udeSVi3Y&usqp=CAU"
        alt="cancelCross"
        onClick={() => setHamburgerOpen(!hamburgerIsOpen)}
      />
    </div>
  );
};
