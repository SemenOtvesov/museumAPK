import React, {useLayoutEffect, useState} from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "@mainComponents/Header.jsx"

export default ({topic, setTopic, wrap, changeContent})=>{
    let location = useLocation()

    const[activeLink, setActiveLink] = useState(undefined)

    useLayoutEffect (()=>{
        const select = document.getElementById('select');
        if(select){return buttonSelected(select)}
    }, [location.pathname, activeLink])

    return(
        <>
            <Header state={topic} setTopic={setTopic} wrap={wrap} 
                changeContent={changeContent} setActiveLink={setActiveLink}/>
            <Outlet state={topic} setTopic={setTopic}/>
        </>
    )
    
    function buttonSelected(select){
        const selectButton = select.children[0]
        const selectItemsList = select.children[1]
        const selectItems = document.querySelectorAll('#selectItem')
    
        const initSelectValue = selectItemsList.querySelector('.selected').getAttribute('value')
        selectButton.innerHTML = initSelectValue

        selectItems.forEach(el=>{
            if(el.firstElementChild.className === 'active'){
                selectButton.classList.add('bold')
            }else{selectButton.classList.remove('bold')}
        })
    
        let clickSelectBind;
        select.addEventListener('click', clickSelectBind = clickSelect.bind(this, select, selectButton, selectItems))
        return ()=>{select.removeEventListener('click', clickSelectBind)}
    }
    
    function clickSelect(select, selectButton, selectItems, event){
        select.classList.toggle('active')
    
        if(event.target.id === 'selectItem'){
            selectItems.forEach(el=>el.classList.remove('selected'))
            event.target.classList.add('selected')
    
            selectButton.innerHTML = event.target.getAttribute('value')
        }else if(event.target.parentElement.id === 'selectItem'){
            selectItems.forEach(el=>el.classList.remove('selected'))
            event.target.parentElement.classList.add('selected')
    
            selectButton.innerHTML = event.target.parentElement.getAttribute('value')
        }
    }
}
