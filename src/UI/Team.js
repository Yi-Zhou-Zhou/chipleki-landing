import React from 'react'
import styles from './Team.module.scss'
import Vicente from '../imgs/Vicente.JPG'
import Yi from '../imgs/Yi.JPG'
import Javier from '../imgs/Javier.JPG'
import Joaquin from '../imgs/Joaquin.JPG'
import Axel from '../imgs/Axel.JPG'
import Ariel from '../imgs/Ariel.JPG'


import { style } from '@mui/system'
const Team = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container__section}>
            <h2 className={styles.container__section__title}> Nuestro Equipo</h2>
            <hr/>
        </div>

        

<div className={styles.wrapper}>
  <div className={styles.card}>
    <img src={Vicente} alt="Vicente profile"></img>
    <div className={styles.border}>
      <h2>Vicente de la Rosa</h2>
      <div className="icons">
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <img src={Javier} alt="Vicente profile"></img>
    <div className={styles.border}>
      <h2>Javier Tralma</h2>
      <div className="icons">
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <img src={Axel} alt="Vicente profile"></img>
    <div className={styles.border}>
      <h2>Axel Arroyo</h2>
      <div className="icons">
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <img src={Joaquin} alt="Vicente profile"></img>
    <div className={styles.border}>
      <h2>Joaquin Caqueo</h2>
      <div className="icons">
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <img src={Ariel} alt="Vicente profile"></img>
    <div className={styles.border}>
      <h2>Ariel Zúñiga</h2>
      <div className="icons">
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <img src={Yi} alt="Vicente profile"></img>
    <div className={styles.border}>
    <h3>Full Stack Developer</h3>
      <h2>Yi Zhou</h2>
      
    </div>
    <div className="icons">

    </div>
  </div>
  

  
  
</div>


    </div>



  )
}

export default Team