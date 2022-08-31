import React from 'react'
import styles from './Footer.module.scss'
import chipleki from '../imgs/chipleki.png'
import usm from '../imgs/usm.png'
import feria from '../imgs/feria.png'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineInstagram, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
  
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>
        <div className={styles.container__logo}>
            <div className={styles.container__logo__img}>
                <img src={chipleki} alt='chipleki team'/>
            </div>

            <div className={styles.container__logo__info}>
                <h2>Encuentranos en</h2>
                <p>XXX Feria de Software</p>
                <p>Universidad Tecnica Federico Santa Maria</p>
                <p>Av. Espana 1680, Valparaiso</p>
            </div>
          <div className={styles.social__media}>
            <a href='https://facebook.com'><FaFacebookSquare size={32}/></a>
            <a href='https://instagram.com'><AiFillInstagram size={32}/></a>
            <a href='https://linkedin.com'><AiFillLinkedin  size={32}/></a>
            

          </div>  

        </div>

        
            

        <div className={styles.container__feed}>
        {/* <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="450px" data-height="210px" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div> */}
        feed
        </div>

        <div className={styles.container__logos}>
            <div className={styles.container__logo2}>
            <img src={usm} alt='utfsm'/>
            </div>

            <div className={styles.container__logo3}>
            <img src={feria} alt='feria de software'/>
            </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer