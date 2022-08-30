import React from 'react'
import styles from './Footer.module.scss'
import chipleki from '../imgs/chipleki.png'
const Footer = () => {

  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.container__section}>
                <h2>Desarrollado por: </h2>
                {/* <img src={chipleki} alt='chipleki'/> */}
                <p>Encuentranos en</p>
                <h3> XXX Feria de Software</h3>
                <p>18 de Noviembre de 2022</p>
                <p>Universidad Tecnica Federico Santa Maria</p>
                <p>Av. Espana 1680, Valparaiso</p>
            </div>

        </div>
    </div>
  )
}

export default Footer