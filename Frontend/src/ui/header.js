import { Link } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar__item">
        Home Services
        <ul className="navbar__item--list">
          <li>
            <Link to="/ebill" className="link">
              Electricity Bill
            </Link>
          </li>
          <li>
            <Link to="/gasbill" className="link">
              Gas Bill
            </Link>
          </li>
          <li>
            <Link to="/telbill" className="link">
              Telephone Bill
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar__item">
        Education
        <ul className="navbar__item--list">
          <li>
            <Link to="/civilservices" className="link">
              Civil Services
            </Link>
          </li>
          <li>
            <Link to="/cacs" className="link">
              CA/CS
            </Link>
          </li>
          <li>
            <Link to="/medeng" className="link">
              MED/ENG
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar__item">
        Medicine
        <ul className="navbar__item--list">
          <li>
            <Link to="/bloodbank" className="link">
              Blood Bank
            </Link>
          </li>
          <li>
            <Link to="/instrument" className="link">
              Instrument
            </Link>
          </li>
          <li>
            <Link to="/testreport" className="link">
              Test Report
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__item">
        Contact Us
        <ul className="navbar__item--list">
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/map" className="link">
              Map
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
