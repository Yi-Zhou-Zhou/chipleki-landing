import React, { useState } from "react";

import styles from "./Header.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { GrClose} from "react-icons/gr";
import PySano from "../imgs/logo.png"
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__content__logo}>
                    <img className={styles.logo} src={PySano} alt="pysano"/>
                </div>
                <div className={styles.header__content__links}>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <a className={styles.nav__item} href={"/"}>
                            Inicio
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Qué es
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Más información
                        </a>
                        <a className={styles.nav__item} href={"/"}>
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