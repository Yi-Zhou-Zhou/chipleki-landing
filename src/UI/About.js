import styles from './About.module.scss'
import React from 'react'
import mission from '../imgs/mission.png'
import vision from '../imgs/vision.png'
import values from '../imgs/values.png'
import Footer from './Footer'
import Team from './Team'
import { Fade } from 'react-awesome-reveal'
const About = () => {
  return (
    <>
  <Fade delay={350} triggerOnce>
    <div className={styles.container}>
      {/* About us Section  */}
        <div className={styles.container__section}>
            <h2 className={styles.container__section__title}> Acerca de Nosotros</h2>
            <hr/>
        </div>

        <div className={styles.container__info} id="nosotros">
          <div className={styles.container__info__head}>
            <p >Somos Chipleki, un equipo de estudiantes de la Universidad Técnica Federico Santa María con el objetivo de ayudar a estudiantes con su aprendizaje en el área de la programación y la computación.</p>
          </div>

          <div className={styles.container__info__body}>
            <div className={styles.container__info__body__card}>
                <div className={styles.container__info__body__card__logo}>
                  <img src={mission} alt="Our mission"/>
                  <h2>Misión</h2>
                </div>
                <div className={styles.container__info__body__card__description}>
                    <p>Contribuir en el proceso de aprendizaje de los estudiantes en el área de la programación, poniendo a su disposición ejercicios que se adecúen a las necesidades y capacidades del estudiante.</p>
                </div>
            </div>
            <div className={styles.container__info__body__card}>
                <div className={styles.container__info__body__card__logo}>
                  <img src={vision} alt="Our Vision"/>
                  <h2>Visión</h2>
                </div>
                <div className={styles.container__info__body__card__description}>
                <p>Queremos ser la plataforma líder para la ejercitación en asignaturas de programación, siendo reconocida por instituciones de educación superior y media.</p>
                </div>
            </div>
            <div className={styles.container__info__body__card}>
                <div className={styles.container__info__body__card__logo}>
                  <img src={values} alt="Our Values"/>
                  <h2>Valores</h2>
                </div>
                <div className={styles.container__info__body__card__description}>
                <p>Creemos en los beneficios del esfuerzo y el trabajo duro,  lo que nos impulsa a superarnos día a día con el fin de propociorcionar software de mejor calidad.</p>
                </div>
            </div>
          </div>
        </div>  
        
    </div>
    <Team></Team>
    <Footer></Footer>
    </Fade>
    </>
    
    
  )
}

export default About