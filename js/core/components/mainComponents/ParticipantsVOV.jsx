import React from "react"
import ParticipantsVOVItem from "@midleComponents/ParticipantsVOVItem.jsx"
import ParticipantsVOVsrc from "@sources/ParticipantsVOVsrc.js"
export default ()=>{
    return(
        <div className="ParticipantsVOV">
            <div className="ParticipantsVOV__container">
                <div className="ParticipantsVOV__title">Участники Великой Отечественной Войны</div>
                <ul className="ParticipantsVOV__list">
                    {ParticipantsVOVsrc.map(el=><ParticipantsVOVItem key={el.name} element={el}/>)}
                </ul>
            </div>
        </div>
    )
}

