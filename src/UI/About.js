import styles from './About.module.scss'
import React from 'react'
import ChiplekiLogo from '../imgs/ChiplekiLogo.png'
import mission from '../imgs/mission.png'
import vision from '../imgs/vision.png'
import values from '../imgs/values.png'
import Footer from './Footer'
import Team from './Team'
const About = () => {
  return (
    <>
    
    <div className={styles.container}>
      {/* About us Section  */}
        <div className={styles.container__section}>
            <h2 className={styles.container__section__title}> Acerca de Nosotros</h2>
            <hr/>
        </div>

        <div className={styles.container__info}>
          <div className={styles.container__info__head}>
            <p >Somos Chipleki, un equipo de estudiantes de la Universidad Técnica Federico Santa María con el objetivo de ayudar a estudiantes con su aprendizaje en el área de la programación y la computación.</p>
          </div>

          <div className={styles.container__info__body}>
            <div className={styles.container__info__body__card}>
                <div className={styles.container__info__body__card__logo}>
                  <img src={mission}/>
                  <h2>Misión</h2>
                </div>
                <div className={styles.container__info__body__card__description}>
                    <p>Promover a los jóvenes hábitos de inversiones en el mundo del trading, poniendo a su disposición una plataforma con las mejores herramientas para practicar y así crear una comunidad de futuros inversores que ayuden a tomar decisiones fundamentadas para una buena inversión</p>
                </div>
            </div>
            <div className={styles.container__info__body__card}>
                <div className={styles.container__info__body__card__logo}>
                  <img src={vision}/>
                  <h2>Visión</h2>
                </div>
                <div className={styles.container__info__body__card__description}>
                    <p>Promover a los jóvenes hábitos de inversiones en el mundo del trading, poniendo a su disposición una plataforma con las mejores herramientas para practicar y así crear una comunidad de futuros inversores que ayuden a tomar decisiones fundamentadas para una buena inversión</p>
                </div>
            </div>
            <div className={styles.container__info__body__card}>
                <div className={styles.container__info__body__card__logo}>
                  <img src={values}/>
                  <h2>Valores</h2>
                </div>
                <div className={styles.container__info__body__card__description}>
                    <p>Promover a los jóvenes hábitos de inversiones en el mundo del trading, poniendo a su disposición una plataforma con las mejores herramientas para practicar y así crear una comunidad de futuros inversores que ayuden a tomar decisiones fundamentadas para una buena inversión</p>
                </div>
            </div>
          </div>
        </div>  
        
    </div>
    <Team></Team>
    <Footer></Footer>
    </>
    
  )
}

export default About