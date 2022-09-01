import React from 'react'
import styles from './Section.module.scss'
const Section = () => {
  return (
    <div className={styles.section} id='info'>
        <div className={styles.section__container}>
            <div className={styles.section__container__description}>
                <h2 className={styles.section__container__description__title}>
                    Que es Pysano
                </h2>
                <p className={styles.section__container__description__info}>
                PySano es una plataforma que te permite mejorar tu pensamiento computacional y tus habilidades en la programación. Dispone de una herramienta  selección inteligente de ejercicios de acuerdo a tus capacidades y necesidades.
                </p>
            </div>
            <div className={styles.section__container__video}>
            <iframe title="YouTube video player" src="https://www.youtube.com/embed/sDj72zqZakE?controls=0" frameborder="0"  height="100%" width="100%"></iframe>
            </div>


        </div>
    </div>
  )
}

export default Section