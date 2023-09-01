import { Link } from "react-router-dom"
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import p404 from "../../img/404.svg";
import "./NotFound.scss";
export default function NotFound(){

    return(
        <div className="not-found">
            <div className="not-found__description">
                <img src={p404} alt="404" className="not-found__problem-num"></img>
                <h2 className="not-found__header">Page not found</h2>
                <p className="not-found__text">The page you are looking for doesn't exist or has been moved</p>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <ButtonLink
                     text="Go to Homepage"
                     className="blue"
                    />
                </Link>
            </div>
        </div>
    )
}