
import Home from "../../pages/Home/Home";

import { Route, Routes} from "react-router-dom";
import Cart from "../../pages/Cart/Cart";
import Thanks from "../../pages/Thanks/Thanks";
import Header from "../Header/Header";
import NotFound from "../../pages/NotFound/NotFound";
import Footer from "../Footer/Footer";

export default function App(){

    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/thanks" element={<Thanks/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    )
}