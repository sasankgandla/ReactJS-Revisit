import { Link } from "react-router";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </div>
  );
};