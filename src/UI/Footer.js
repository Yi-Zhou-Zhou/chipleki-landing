import React from 'react'
import styles from './Footer.module.scss'
import chipleki from '../imgs/chipleki.png'
import usm from '../imgs/usm.png'
import feria from '../imgs/feria.png'
const Footer = () => {

  return (
    <footer className={styles.footer}>

      <div className={styles.container}>
        <div className={styles.container__logo}>
          <img src={chipleki} alt='chipleki team'/>
        </div>

        <div className={styles.container__info}>
            <h2>Encuentranos en</h2>
            <p>XXX Feria de Software</p>
            <p>Universidad Tecnica Federico Santa Maria</p>
            <p>Av. Espana 1680, Valparaiso</p>
        </div>

        <div className={styles.container__feed}>
        <p> Feed</p>
        </div>
        <div className={styles.container__logo2}>
          <img src={usm} alt='chipleki team'/>
        </div>

        <div className={styles.container__logo3}>
          <img src={feria} alt='chipleki team'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer