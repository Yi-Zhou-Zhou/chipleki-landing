import React, { useState, useEffect} from "react";

import styles from "./AboutHeader.module.scss";

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
                <LinkR to="/">
                        <img className={styles.logo} src={PySano} alt="pysano"/>
                </LinkR>
                    
                </div>
                <div className={styles.header__content__links}>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                    <LinkR to="/" className={styles.nav__item}>
                        Inicio
                    </LinkR>
                    <LinkS to="nosotros" className={styles.nav__item} spy={true} smooth={true} offset={-200} duration={500}>
                        Nosotros
                    </LinkS>
                    <LinkS to="equipo" className={styles.nav__item} spy={true} smooth={true} offset={-65} duration={500}>
                        Nuestro Equipo
                    </LinkS>
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