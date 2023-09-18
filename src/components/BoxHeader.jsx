import StyleBoxHeader from "../styles/box/BoxHeader.module.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function BoxHeader({ props }) {
  const navigate = useNavigate();
  const location = useLocation();

  let text = "Generate QR codes";
  let route = "/generator";
  if (location.pathname === "/generator") {
    text = "Decode QR codes";
    route = "/decoder";
  }

  return (
    <header className={StyleBoxHeader.header}>
      <div>
        <div className={StyleBoxHeader.circle} style={{ backgroundColor: "#000000" }} />
        <div className={StyleBoxHeader.circle} style={{ backgroundColor: "#5B6EEF" }} />
        <div className={StyleBoxHeader.circle} style={{ backgroundColor: "#EDECED" }} />
      </div>
      <nav>
        <p className={StyleBoxHeader.navLink} onClick={() => navigate(route)}>{text}</p>
      </nav>
    </header>
  );
}
