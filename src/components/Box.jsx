import StyleBox from "../styles/box/Box.module.css";
import BoxHeader from "./BoxHeader";
import BoxBody from "./BoxBody";

export default function Box() {
  return (
    <div className={StyleBox.box}>
      <BoxHeader />
      <BoxBody />
    </div>
  );
}
