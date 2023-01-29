import React, {useState, useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "@core/Layout.jsx";

import ParticipantsVOV from '@mainComponents/ParticipantsVOV.jsx'
import setState from "./setState.js";

const App = (props) =>{
    const location = useLocation()
    const state = JSON.parse(localStorage.getItem('state')) || {}
    const [topic, setTopic] = useState('topic' in state ? state.topic : 'white')
    const wrap = props.wrap

    window.addEventListener('click', windowListener)

    useEffect(()=>{
        changeContent()
        let newState = setState(state, 'setTopic', topic)
        if(newState != state){
            localStorage.setItem('state', JSON.stringify(newState))
        }
    }, [topic])

    useEffect(()=>{
        changeContent()
        equalSidesFn()
    })

    useEffect(()=>{
    }, [location.pathname])

    return(
        <Routes>
            <Route path="/" element={<Layout topic={topic} setTopic={setTopic} wrap={wrap} changeContent={changeContent}/>}>
                <Route path="participantsVOV" element={<ParticipantsVOV />}/>
            </Route>
        </Routes>
    )

    function windowListener(event){
        const target = event.target
    
        if(target.getAttribute('id') === 'select'){
            return
        }else if(target.parentElement.getAttribute('id') === 'select'){
            return
        }else {
            document.querySelectorAll('#select').forEach(el=>el.classList.remove('active'))
        }
    }

    function equalSidesFn(){
        const equalSidesElements = document.querySelectorAll('#equalSides')
        equalSidesElements.forEach(el=>el.style.height = el.offsetWidth * 1.25 + 'px')
    }

    function changeContent(){
        if(topic === 'white'){
            wrap.parentElement.classList.remove('black')
            wrap.parentElement.classList.add('white')
    
            for(const element of wrap.children){
                element.classList.remove('black')
                element.classList.add('white')
            }
        }
        if(topic === 'black'){
            wrap.parentElement.classList.remove('white')
            wrap.parentElement.classList.add('black')
    
            for(const element of wrap.children){
                element.classList.remove('white')
                element.classList.add('black')
            }
        }
    }
}
export default App