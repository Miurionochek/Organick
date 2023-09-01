
import { Link } from "react-router-dom";

import "./NavBar.scss";

import DropDownList from "../DropDownList/DropDownList";

const LIST_PLACEHOLDER = "Pages";
const OPTION_LIST = [
    ["About", "/about"], 
    ["Shop", "/shop"], 
    ["Blog", "/blog"], 
    ["Service", "/service"], 
    ["Standards", "/standards"], 
    ["Projects","/projects"]
];

export default function NavBar(){

    return(
        <nav className="navigate">
            <ul className="navigate__items">
                <li>        
                    <Link to="/" className="navigate__item">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="navigate__item">About</Link>
                </li>
                <li>
                    <DropDownList placeHolder={LIST_PLACEHOLDER} optionList={OPTION_LIST}/>
                </li>
                <li>
                    <Link to="/shop" className="navigate__item">Shop</Link>
                </li>
                <li>
                    <Link to="/projects" className="navigate__item">Projects</Link>
                </li>
                <li>
                    <Link to="/news" className="navigate__item">News</Link>
                </li>
            </ul>
        </nav>
    )
}