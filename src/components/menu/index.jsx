import logo from "../../assets/img/logo.svg";
import instagram from "../../assets/img/icons/instagram.svg";
import telegram from "../../assets/img/icons/telegram.svg";

import { BurgerMenu } from "./burger_menu";
import { useEffect, useState } from "react";

import {modalAction} from "../../store/actions/modal";
import {setSticky} from "../../store/actions/sticky";

import {scroll} from "./scrollOnClick";
import { useDispatch, useSelector } from "react-redux";

export function Menu() {
    const dispatch = useDispatch();
    const isSticky = useSelector(store=>store.sticky.sticky);
    useEffect(()=>{
        const offsetY = 150;
        const menuEl = document.querySelector(".menu");
    
        document.addEventListener("scroll", (e) => {
    
            if (Math.abs(document.documentElement.getBoundingClientRect().y) > offsetY && !menuEl.classList.contains("sticky")) {
                menuEl.classList.add("sticky");
                dispatch(setSticky(true));
            } else if (Math.abs(document.documentElement.getBoundingClientRect().y) < offsetY) {
                menuEl.classList.remove("sticky");
                dispatch(setSticky(false));
            }
        })
    }, []);

    const menuClasses = isSticky ? "menu sticky" : "menu";

    return (
        <section className={menuClasses}>
            <div className="container h-100">
                <div className="row justify-content-between h-100 align-items-center">

                    <BurgerMenu />
                    <div className="logo-wrap col-4 p-0">
                        <img src={logo} className="logo" alt="Логотип" />
                    </div>
                    <nav className="navigation col-5 d-none d-md-flex">
                        <div onClick={()=>scroll(".henkali_is")} className="navigation__link">Концепция</div>
                        <div onClick={()=>scroll(".team")} className="navigation__link">Команда</div>
                        <div onClick={()=>scroll(".finance")} className="navigation__link">Условия</div>
                        <div onClick={()=>dispatch(modalAction())} className="navigation__link">Контакты</div>
                    </nav>
                    <div className="social col-3">
                        <div className="social__link phone">
                            <a href="tel:+79780625281" className="social__link social phone">
                                +79780625281
                            </a>
                        </div>
                        <a href="//instagram.com/starikhinkalych/" className="social__link social">
                            <img src={instagram} alt="Инстаграм" />
                        </a>
                        <a href="//t.me/franchise_hinkalych" className="social__link social">
                            <img src={telegram} alt="Телеграм" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}