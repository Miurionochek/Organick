import { useState } from "react";
import { Link } from "react-router-dom";

import "./DropDownList.scss";

import upArrow from "../../img/up-arrow.png";
import downArrow from "../../img/down-arrow.png";

export default function DropDownList({placeHolder, optionList}){

    const [open, toggleOpen] = useState(false);

    const handleClick = () => {
        toggleOpen(!open);
    }
    return(
        <>
            {open ?       
                (   
                <div className="dropdown-list">
                    <div onClick={handleClick} className="dropdown-list__header">
                        <h1 className="dropdown-list__title">{placeHolder}</h1>
                        <img src={downArrow} alt="down" className="dropdown-list__arrow"/>
                    </div>
                    <ul className="dropdown-list__items">
                        {optionList.map((option) =>( 
                            <li>
                                <Link to={option[1]} className="dropdown-list__item">
                                    {option[0]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                )
                :
                <div className="dropdown-list">
                    <div onClick={handleClick} className="dropdown-list__header">
                        <h1 className="dropdown-list__title">{placeHolder}</h1>
                        <img src={upArrow} alt="up" className="dropdown-list__arrow"/>
                    </div>
                </div>
            }
        </>
    )
}