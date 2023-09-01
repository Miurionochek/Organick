
import "./Header.scss";

import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";

export default function Header(){


    return(
        <div className="header">
            <Logo/>
            <NavBar/>
            <Search/>
            <Cart/>
        </div>
    )
}