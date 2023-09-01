
import "./Footer.scss";

import line from "../../img/Vertical-Line.svg";
import Logo from "../Logo/Logo";

import instagram from "../../img/Insta.svg";
import facebook from "../../img/Fb.svg";
import twitter from "../../img/Twiter.svg";
import pintrest from "../../img/Pintrest.svg";
export default function Footer(){

    return(

        <footer className="footer">
            <div className="footer__container">
                <div className="footer__contacts">
                    <h1 className="footer__contacts-h">Contact Us</h1>
                    <div className="footer__contact">
                        <h3 className="footer__text"><strong>Email</strong></h3>
                        <h3 className="footer__text">needhelp@Organia.com</h3>
                    </div>
                    <div className="footer__contact">
                        <h3 className="footer__text"><strong>Phone</strong></h3>
                        <h3 className="footer__text">666 888 888</h3>
                    </div>
                    <div className="footer__contact">
                       <h3 className="footer__text"><strong>Address</strong></h3>
                        <h3 className="footer__text">88 road, brooklyn street, USA</h3>
                    </div>
                </div>
                <img src={line} alt="line" className="line" />
                <div className="footer__main">
                    <Logo/>
                    <p className="footer__text footer__mt">
                        Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing 
                    </p>
                    <div className="footer__follows">
                        <div className="footer__follow-item">
                            <img src={instagram} alt="inst" />
                        </div>
                        <div className="footer__follow-item">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="footer__follow-item">
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className="footer__follow-item">
                            <img src={pintrest} alt="pintrest" />
                        </div>
                    </div>
                </div>
                <img src={line} alt="line" className="line" />
                <div className="footer__pages">
                    <h1 className="footer__pages-h">Utility Pages</h1>
                    <div className="footer__page-items">
                        <h3 className="footer__page">404 Not Found</h3>
                        <h3 className="footer__page">Password Protected</h3>
                        <h3 className="footer__page">Licenses</h3>
                        <h3 className="footer__page">Changelog</h3>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer__copyright">
            Copyright © <strong>Organick</strong> | Designed by <strong>VictorFlow</strong> Templates - Powered by <strong>Webflow</strong>
            </div>
        </footer>
    )
}