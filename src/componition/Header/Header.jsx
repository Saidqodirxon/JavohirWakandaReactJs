import React from "react";
import '../Header/Header.css'
import logo from "../../assets/images/wakanda.png";
function Header() {
  return (
    <header id="main-header" className="py-3 fs-5">
      <nav className="container d-flex align-items-center justify-content-between">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <ul className="d-flex align-items-center justfiy-content-between list-unstyled m-0 gap-3">
          <li>
            <a className="text-reset text-decoration-none" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-reset text-decoration-none" href="#">
              About us
            </a>
          </li>
          <li>
            <a className="text-reset text-decoration-none" href="#">
              How it works
            </a>
          </li>
          <li>
            <a className="text-reset text-decoration-none" href="#">
              For Freelancer
            </a>
          </li>
          <li>
            <a id="btn" className="text-reset text-decoration-none" href="#">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
