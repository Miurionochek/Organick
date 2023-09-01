
import { useDispatch, useSelector } from "react-redux";
import ButtonLink from "../ButtonLink/ButtonLink";
import ProductCard from "../ProductCard/ProductCard";

import "./ShopComponent.scss";
import { useEffect, useState } from "react";
import { fetchCards } from "../../redux/cards";
import { PopUp } from "../PopUp/PopUp";

export default function ShopComponent(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCards())
    },[]);

    const cardsData = Object.values(useSelector(state => state.cards.cards.items));
    const defaultCardList = cardsData.slice(0, 8);
    const [switcher, changeSwitch] = useState(false)
    const [resList, changeList] = useState(defaultCardList)
    const [btnLinkData, ChangeBtnLinkData] = useState("Load More");
    const [modalData, ChangeModalData] = useState(null);
    const [open, ChangeOpen] = useState(false)
    const handleOpen = () => {
        ChangeOpen(true);
    }
    const toggleCardList = () => {
        if(switcher){
            changeList(cardsData)
            ChangeBtnLinkData("Hide All");
            changeSwitch(false)
        }
        else{
            changeList(defaultCardList)
            ChangeBtnLinkData("Load More");
            changeSwitch(true)
        }
    }
    if(open){
        document.body.style.overflow = "hidden"
    }
    else{
        document.body.style.overflow = "scroll"
    }
    
    return(
        <>
            <div className="shop-component">
                <div className="shop-component__titles">
                    <h3 className="shop-component__pre-header">Categories</h3>
                    <h1 className="shop-component__header">Our Products</h1>
                </div>
                <div className="shop-component__goods">
                    {resList.map((option) =>( 
                                <ProductCard 
                                    tag={option.tag}
                                    imgUrl={option.imgUrl}
                                    title={option.title}
                                    oldPrice={option.oldPrice}
                                    currentPrice={option.currentPrice}
                                    starAmount={option.starAmount}
                                    handleChangeModal={ChangeModalData}
                                    handleOpen={handleOpen}
                                />
                            ))}
                </div>
                <span className="test" onClick={toggleCardList}>
                    <ButtonLink text={btnLinkData} className={"black"}/>
                </span>
            </div>
            {
                open && (
                    <>
                    <PopUp
                        tag={modalData.tag}
                        imgUrl={modalData.imgUrl}
                        title={modalData.title}
                        oldPrice={modalData.oldPrice}
                        currentPrice={modalData.currentPrice}
                        starAmount={modalData.starAmount}
                        handleClose={ChangeOpen}
                    />
                    </>
                )
            }
        </>
    )
}