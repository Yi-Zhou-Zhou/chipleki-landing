import React from 'react'
import styles from './Footer.module.scss'
import chipleki from '../imgs/chipleki.png'
import usm from '../imgs/usm.png'
import feria from '../imgs/feria.png'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
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
          <div className='social__media'>
            <BsFacebook size={29}/>
            <AiOutlineInstagram size={29}/>
            <BsFacebook size={29}/>
          </div>  

        </div>

        
            

        <div className={styles.container__feed}>
        <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="250px" data-height="200px" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
        </div>

        <div className={styles.container__logos}>
            <div className={styles.container__logo2}>
            <img src={usm} alt='utfsm'/>
            </div>

            {/* <div className={styles.container__logo3}>
            <img src={feria} alt='feria de software'/>
            </div> */}
        </div>
        
      </div>
    </footer>
  )
}

export default Footer