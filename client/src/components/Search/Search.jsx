
import { useState } from "react";

import "./Search.scss";

import search from "../../img/Search.svg";
                                                            
export default function Search(){
    const [request, changeText] = useState("");
    const message = () => {
        alert("Your request is:" + request);
    }

    const handleChange = (e) => {
        changeText(e.target.value);
    }

    return(
        <div className="search">
            <input type="search" className="search__input" onChange={handleChange}/>
            <button type="submit" className="search__button" onClick={message}>
                <img src={search} alt="search" className="search__img" />
            </button>
        </div>
    )
}