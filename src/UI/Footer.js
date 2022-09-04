import React from 'react'
import styles from './Footer.module.scss'
import chipleki from '../imgs/chipleki.png'
import usm from '../imgs/usm.png'
import feria from '../imgs/feria.png'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>
        <div className={styles.container__logo}>
            <div className={styles.container__logo__img}>
                <img src={chipleki} alt='chipleki team'/>
            </div>

            <div className={styles.container__logo__info}>
                <h2>Encuéntranos en</h2>
                <p>XXX Feria de Software</p>
                <p>Universidad Técnica Federico Santa María</p>
                <p>Av. España 1680, Valparaíso</p>
            </div>
          <div className={styles.social__media}>
            <a href='https://facebook.com'><FaFacebookSquare size={32}/></a>
            <a href='https://instagram.com'><AiFillInstagram size={32}/></a>
            <a href='https://linkedin.com'><AiFillLinkedin  size={32}/></a>
            

          </div>  

        </div>

      <div className={styles.uLogo}>
        <img src={usm} alt="usm"/>
        <img src={feria} alt="fesw"/>
      </div>
      
            

      
        
      </div>
    </footer>
  )
}

export default Footer