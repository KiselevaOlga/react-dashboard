import {React} from 'react';
import construction from "../../images/construction.png";
import "./ConstructionPage.css";
import {BigHeader} from "../../components/smallComponents/Headers";
import {GreyButton} from "../../components/smallComponents/Buttons"

export const ConstructionPage = ()=>{
    return (
        <div>
            <BigHeader align="center">
                <p>This page is currently under construction</p>
                <GreyButton>Explore more...</GreyButton>
            </BigHeader>
            <figure>
                <img src={construction} className="bigPic"/>
            </figure>
        </div>
    )
}