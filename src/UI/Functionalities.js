import React from 'react'
import styles from './Functionalities.module.scss'
import search from '../imgs/search.png'
import testing from '../imgs/testing.png'
import rank from '../imgs/rank.png'
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
                      <img src={selection} alt='selection'/>
                    </div>
                    <div>
                    <div className={styles.container__section__description__row__title}>
                        Selección de ejercicios inteligente
                    </div>
                    <div className={styles.container__section__description__row__info}>
                        <h2>PySano selecciona los ejercicios perfectos para tu estudio personal en base a tus capacidades,permitiendo adaptarse perfectamente a lo que necesitas.</h2>
                    </div>
                    </div>
                  </div>
                  <div className={styles.container__section__description__row}>
                    <div className={styles.container__section__description__row__icon}>
                      <img src={diversity} alt='selection'/>
                    </div>
                    <div>
                    <div className={styles.container__section__description__row__title}>
                      Diversidad de ejercicios
                    </div>
                    <div className={styles.container__section__description__row__info}>
                    <h2>PySano posee una gran variedad de ejercicios para que practiques y refuerzes lo aprendido en el Aula.</h2>                    </div>
                    </div>
                  </div>
                  <div className={styles.container__section__description__row}>
                    <div className={styles.container__section__description__row__icon}>
                      <img src={feedback} alt='feedback'/>
                    </div>
                    <div>
                    <div className={styles.container__section__description__row__title}>
                    Retroalimentación adjetivo descriptivo
                    </div>
                    <div className={styles.container__section__description__row__info}>
                        <h2>PySano entrega retroalimentación descriptiva al momento de que resuelvas los ejercicios, de forma de guiarte y enfocarte en tu proceso de aprendizaje.</h2>
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