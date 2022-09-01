import React, { useState } from "react";

import styles from "./Header.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { GrClose} from "react-icons/gr";
import PySano from "../imgs/logo2.png"
import {Link as LinkS} from "react-scroll"
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__content__logo}>
                <LinkS to="home" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className={styles.logo} src={PySano} alt="pysano"/>
                </LinkS>
                    
                </div>
                <div className={styles.header__content__links}>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <LinkS to="home" spy={true} smooth={true} offset={-100} duration={500}>
                            Inicio
                        </LinkS>
                        <a className={styles.nav__item} href="#info">
                            Qué es
                        </a>
                        <a className={styles.nav__item} href="#more">
                            Más información
                        </a>
                        <a className={styles.nav__item} href="#about-us">
                            Nuestro equipo
                        </a>
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