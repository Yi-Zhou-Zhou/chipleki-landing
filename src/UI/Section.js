import React from 'react'
import styles from './Section.module.scss'
const Section = () => {
  return (
    <div className={styles.section}>
        <div className={styles.section__container}>
            <div className={styles.section__container__description}>
                <h2 className={styles.section__container__description__title}>
                    Que es Pysano
                </h2>
                <p className={styles.section__container__description__info}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an standard dummy text ever since the 1500s, when an
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