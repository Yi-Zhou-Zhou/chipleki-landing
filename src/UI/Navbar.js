import React from 'react'
import styles from "./Navbar.module.scss"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src='' alt='PySano'></img>
            </div>
            <div className={styles.links}>
                <Link to="/">Inicio</Link>
                <Link to="/">Qué Es?</Link>
                <Link to="/">Funcionalidades</Link>
                <Link to="/">Sobre Nosotros</Link>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar