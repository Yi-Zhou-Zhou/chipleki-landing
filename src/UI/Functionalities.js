import React from 'react'
import styles from './Functionalities.module.scss'
import { Slide, Fade } from 'react-awesome-reveal'
import Terminal from 'react-animated-term'
import selection from '../imgs/selection.png'
import diversity from '../imgs/diversity.png'
import feedback from '../imgs/feedback.png'
import 'react-animated-term/dist/react-animated-term.css'
const Functionalities = () => {
    const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    const termLines = [
      
        {
          text: 'from Chipleki import PySano ',
          cmd: true,
          delay: 20
        },
        {
          text: '✔ Modules imported',
          cmd: false,
          repeat: true,
          repeatCount: 1,
          frames: spinner.map(function (spinner) {
            return {
              text: spinner + ' Importing modules',
              delay: 0
            }
          })
        },
        {
          text: 'if student:',
          cmd: true,
          delay: 40
        },

        
        {
          text: ' while student use PySano:',
          cmd: true,
          delay: 40
        },
        {
          text: '   programmingSkill += 1',
          cmd: true,
          delay: 40
        },
        
      ]

  return (
    <div className={styles.functionalities} id='more'>
        <div className={styles.functionalities__group}>
            <h2 className={styles.functionalities__group__h2}>Funcionalidades</h2>
            <p className={styles.functionalities__group__p}>A través de estas herramientas, Pysano te asegurará un aprendizaje uniforme y personalizado</p>
            <hr className={styles.functionalities__group__hr}/>
        </div>
        
        <div className={styles.container}>
            
            <div className={styles.container__section}>
                <div className={styles.container__section__icon}>
                <Terminal
                    lines={termLines}
                    interval={50}
                />
                </div>
                <div className={styles.container__section__description}>

                
                  <div className={styles.container__section__description__row}>
                    <div className={styles.container__section__description__row__icon}>
                      <Fade delay={350} triggerOnce>
                        <Slide delay={500} triggerOnce>
                      <img src={selection} alt='selection'/>
                      </Slide>
                      </Fade>
                    </div>
                    <div>
                    <div className={styles.container__section__description__row__title}>
                    <Slide  direction="up" triggerOnce>
                        Selección de ejercicios inteligente
                        </Slide>
                    </div>
                    <div className={styles.container__section__description__row__info}>
                    <Slide  direction="up" triggerOnce>
                        <h2>PySano selecciona los ejercicios perfectos para tu estudio personal en base a tus capacidades,permitiendo adaptarse perfectamente a lo que necesitas.</h2>
                        </Slide>
                    </div>
                    </div>
                  </div>
                  <div className={styles.container__section__description__row}>
                    <div className={styles.container__section__description__row__icon}>
                    <Fade delay={650} triggerOnce>
                        <Slide delay={650} triggerOnce>
                      <img src={diversity} alt='selection'/>
                      </Slide>
                      </Fade>
                    </div>
                    <div>
                    <div className={styles.container__section__description__row__title}>
                    <Slide  direction="up" triggerOnce>
                      Diversidad de ejercicios
                      </Slide>
                    </div>
                    <div className={styles.container__section__description__row__info}>
                    <Slide  direction="up" triggerOnce>
                    <h2>PySano posee una gran variedad de ejercicios para que practiques y refuerzes lo aprendido en el Aula.</h2>   
                    </Slide>                 </div>
                    </div>
                  </div>
                  <div className={styles.container__section__description__row}>
                    <div className={styles.container__section__description__row__icon}>
                    <Fade delay={950} triggerOnce>
                        <Slide delay={650} triggerOnce>
                      <img src={feedback} alt='feedback'/>
                      </Slide>
                      </Fade>
                    </div>
                    <div>
                    <div className={styles.container__section__description__row__title}>
                    <Slide  direction="up" triggerOnce>
                    Retroalimentación adjetivo descriptivo
                    </Slide>
                    </div>
                    <div className={styles.container__section__description__row__info}>
                    <Slide  direction="up" triggerOnce>
                        <h2>PySano entrega retroalimentación descriptiva al momento de que resuelvas los ejercicios, de forma de guiarte y enfocarte en tu proceso de aprendizaje.</h2>
                        </Slide>
                    </div>
                    </div>
                  </div>

                    
                    
                </div>
                
                
            </div>
            

        </div>
    </div>
  )
}

export default Functionalities