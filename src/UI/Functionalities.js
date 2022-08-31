import React from 'react'
import styles from './Functionalities.module.scss'
import search from '../imgs/search.png'
import testing from '../imgs/testing.png'
import rank from '../imgs/rank.png'
const Functionalities = () => {
    


  return (
    <div className={styles.functionalities} id='more'>
        <div className={styles.container}>
            <div className={styles.container__section}>
                <div className={styles.container__section__icon}>
                    <img  src={search} alt='search exercises' className={styles.container__section__icon__image}/>
                </div>
                
                <div className={styles.container__section__description}>
                    <div className={styles.container__section__description__title}>
                        Lorem Ipsum
                    </div>
                    <div className={styles.container__section__description__info}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an is simply dummy text of the printing and typesetting industry.</h2>
                    </div>
                </div>
                
            </div>
            <div className={styles.container__section}>
                <div className={styles.container__section__description}>
                    <div className={styles.container__section__description__title}>
                        Lorem Ipsum
                    </div>
                    <div className={styles.container__section__description__info}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an is simply dummy text of the printing and typesetting industry.</h2>
                    </div>
                </div>

                <div className={styles.container__section__icon}>
                    <img  src={testing} alt='search exercises' className={styles.container__section__icon__image}/>
                </div> 
            </div>
            <div className={styles.container__section}>
                <div className={styles.container__section__icon}>
                    <img  src={rank} alt='search exercises' className={styles.container__section__icon__image}/>
                </div>
                
                <div className={styles.container__section__description}>
                    <div className={styles.container__section__description__title}>
                        Lorem Ipsum
                    </div>
                    
                    
                     <div className={styles.container__section__description__info}>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an is simply dummy text of the printing and typesetting industry.</h2>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Functionalities