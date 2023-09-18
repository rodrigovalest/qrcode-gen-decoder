import NothingToSee from "../images/nothingToSee.gif";
import StyleError from "../styles/error/Error.module.css";
import { useNavigate } from "react-router-dom";

export default function Error() {
  let navigate = useNavigate();

  return (
    <div id={StyleError.errorBox}>
      <div>
        <h1 id={StyleError.errorTitle}>Error</h1>
        <img src={NothingToSee} id={StyleError.errorImage} alt="Ilustrative error gif"></img>
        <p onClick={() => navigate("/generator")} className={StyleError.linkBack}>Go to generator page</p>
        <p onClick={() => navigate("/decoder")} className={StyleError.linkBack}>Go to decoder page</p>
      </div>
    </div>
  );
}
