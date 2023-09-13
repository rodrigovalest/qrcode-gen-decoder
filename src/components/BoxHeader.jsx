import StyleBoxHeader from "../styles/box/BoxHeader.module.css";

export default function BoxHeader() {
  return (
    <header className={StyleBoxHeader.boxHeader}>
      <div>
        <div className={StyleBoxHeader.circle} style={{ backgroundColor: "black" }} />
        <div className={StyleBoxHeader.circle} style={{ backgroundColor: "#5B6EEF" }} />
        <div className={StyleBoxHeader.circle} style={{ backgroundColor: "#EDECED" }} />
      </div>
      <nav>
        <a className={StyleBoxHeader.navLink} href="#">Decode QR codes</a>
      </nav>
    </header>
  );
}
