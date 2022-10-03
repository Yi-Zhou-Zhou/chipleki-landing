import React, { useState } from "react";

import styles from "./Header.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { GrClose} from "react-icons/gr";
import PySano from "../imgs/logo2.png"
import {Link as LinkS} from "react-scroll"
import {Link as LinkR} from "react-router-dom"
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    return (
        <div className={color ? styles.header__color : styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__content__logo}>
                <LinkS to="home" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className={styles.logo} src={PySano} alt="pysano"/>
                </LinkS>
                    
                </div>
                <div className={styles.header__content__links}>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <LinkS className={styles.nav__item} to="home" spy={true} smooth={true} offset={-100} duration={500}>
                            Inicio
                        </LinkS>
                        <LinkS className={styles.nav__item} to="info" spy={true} smooth={true} offset={-70} duration={500}>
                            Qué es
                        </LinkS>
                        <LinkS className={styles.nav__item} to="more" spy={true} smooth={true} offset={-70} duration={500}>
                            Más información
                        </LinkS>
                        <LinkS className={styles.nav__item} to="news" spy={true} smooth={true} offset={-70} duration={500}>
                            Noticias
                        </LinkS>
                        <LinkR className={styles.nav__item} to="about-us">
                            Nuestro equipo
                        </LinkR>
                    </nav>
                </div>
                <div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <GrClose />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;