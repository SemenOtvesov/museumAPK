import React from "react";

export default ({element})=>{
    return(
        <li className="ParticipantsVOV__item">
            <div id="equalSides" className="ParticipantsVOV__item-left">
                <div className="ParticipantsVOV__item-img">
                    <picture>
                        <source srcSet={element.url}/>
                        <img src={element.altUrl} alt="" />
                    </picture>
                </div>
            </div>
            <div className="ParticipantsVOV__item-right">
                <div className="ParticipantsVOV__item-title">{element.name}</div>
                <div className="ParticipantsVOV__item-text">{element.info}</div>
            </div>
        </li>
    )
}