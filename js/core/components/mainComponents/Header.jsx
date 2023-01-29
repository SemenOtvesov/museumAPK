import React, {useEffect} from "react"
import { NavLink, useLocation } from "react-router-dom";

const scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);

const Header = (props) =>{
    const location = useLocation()

    useEffect(()=>{
        checkActiveSelect(location.pathname)
    }, [location.pathname])

    if(scrollWidth < 1440){
        return(
        <div className="header">
            <div className="header__container">
                <div data-pos="left" className="header__title">
                    <NavLink to={"/"} className="header__title-logo">
                        <img src="img/icon/logo.png" alt=""/>
                    </NavLink>
                    <div className="header__title-text">
                        Арзамасский <br/>
                        приборостроительный <br/>
                        колледж <br/>
                        им. П.И. Пландина <br/>
                    </div>
                </div>
                <div onClick={circlBoxClick} className="circle__box">
                    <div data-indicator-color="white" className="header__circle-white"></div>
                    <div className="header__separator"></div>
                    <div data-indicator-color="black" className="header__circle-black"></div>
                </div>
                <ul data-pos="right" className="header__list">
                    <li className="header__item"><NavLink to={"/info"}>О музее</NavLink></li>
                    <li className="header__item"><NavLink to={"/news"}>Новости</NavLink></li>
                    <li className="header__item">
                        <div className="header__item-text">Ещё...</div>
                        <ul className="header__sublist">
                            <li className="header__subItem"><NavLink to={"/expositions"}>Экспозиции</NavLink></li>
                            <li className="header__item">
                                История колледжа
                                <div id="select" className="header__item-select">
                                    <button className="header__item-select-button">История колледжа</button>
                                    <ul className="header__item-select-list">
                                        <li id="selectItem" value={'Участники ВОВ'} className="header__item-select-item selected">
                                            <NavLink to={"/history"}>История колледжа</NavLink>
                                        </li>
                                        <li id="selectItem" value={'Участники ВОВ'} className="header__item-select-item">
                                            <NavLink to={"/participantsVOV"}>Участники ВОВ</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="header__subItem"><NavLink to={"/album"}>Фотоальбом</NavLink></li>
                            <li className="header__subItem"><NavLink to={"/graduates"}>Выпускники</NavLink></li>
                            <li className="header__subItem"><NavLink to={"/stProject"}>Проекты студентов</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        )
    }else{
        return(
            <div className="header">
                <div className="header__container">
                <div data-pos="left" className="header__title">
                    <NavLink to={"/"} className="header__title-logo">
                        <img src="img/icon/logo.png" alt=""/>
                    </NavLink>
                    <div className="header__title-text">
                        Арзамасский <br/>
                        приборостроительный <br/>
                        колледж <br/>
                        им. П.И. Пландина <br/>
                    </div>
                </div>
                <div onClick={circlBoxClick} className="circle__box">
                    <div data-indicator-color="white" className="header__circle-white"></div>
                    <div className="header__separator"></div>
                    <div data-indicator-color="black" className="header__circle-black"></div>
                </div>
                <ul data-pos="right" className="header__list">
                    <li className="header__item"><NavLink to={"/info"}>О музее</NavLink></li>
                    <li className="header__item"><NavLink to={"/news"}>Новости</NavLink></li>
                    <li className="header__item"><NavLink to={"/expositions"}>Экспозиции</NavLink></li>
                    <li className="header__item">
                        <div data-select-num='1' id="select" className="header__item-select">
                            <button className="header__item-select-button">История колледжа</button>
                            <ul className="header__item-select-list">
                                <li data-num='1' id="selectItem" value={'История колледжа'} className="header__item-select-item selected">
                                    <NavLink to={"/history"}>История колледжа</NavLink>
                                </li>
                                <li data-num='2' id="selectItem" value={'Участники ВОВ'} className="header__item-select-item">
                                    <NavLink to={"/participantsVOV"}>Участники ВОВ</NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header__item"><NavLink to={"/album"}>Фотоальбом</NavLink></li>
                    <li className="header__item"><NavLink to={"/graduates"}>Выпускники</NavLink></li>
                    <li className="header__item"><NavLink to={"/stProject"}>Проекты студентов</NavLink></li>
                </ul>
                </div>
            </div>
        )
    }

    function checkActiveSelect(path){
        const select = document.getElementById('select')
        const link = select.querySelector(`[href="${path}"]`)
        if(link){
            const listEl = [...document.querySelector('.header__item-select-list').children]
            listEl.forEach(el=>el.classList.remove('selected'))
            link.parentElement.classList.add('selected');
        }
        props.setActiveLink(link)
    }

    function circlBoxClick(event){
        if(event.target.dataset.indicatorColor === 'white'){
            props.wrap.dataset.statetopic = 'white'
            props.setTopic('white')
        }
        if(event.target.dataset.indicatorColor === 'black'){
            props.wrap.dataset.statetopic = 'black'
            props.setTopic('black')
        }
    }
} 

export default Header