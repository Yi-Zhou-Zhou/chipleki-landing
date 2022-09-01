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
                        Selección de ejercicios inteligente
                    </div>
                    <div className={styles.container__section__description__info}>
                        <h2>PySano selecciona los ejercicios perfectos para tu estudio personal en base a tus capacidades,permitiendo adaptarse perfectamente a lo que necesitas.</h2>
                    </div>
                </div>
                
            </div>
            <div className={styles.container__section}>
                <div className={styles.container__section__description}>
                    <div className={styles.container__section__description__title}>
                        Diversidad de ejercicios
                    </div>
                    <div className={styles.container__section__description__info}>
                        <h2>PySano posee una gran variedad de ejercicios para que practiques y refuerzes lo aprendido en el Aula.</h2>
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
                    Retroalimentación adjetivo descriptivo
                    </div>
                    
                    
                     <div className={styles.container__section__description__info}>
                        <h2>PySano entrega retroalimentación descriptiva al momento de que resuelvas los ejercicios, de forma de guiarte y enfocarte en tu proceso de aprendizaje.</h2>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Functionalities