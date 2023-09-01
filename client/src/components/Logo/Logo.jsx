
import logo from "../../img/Logo.svg";
import "./Logo.scss";

export default function Logo(){

    return(
        <div className="logo">
            <img src={logo} alt="logo" className="logo__img" />
            <h1 className="logo__title">Organick</h1>
        </div>
    )
}