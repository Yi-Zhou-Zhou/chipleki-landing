import React from 'react'
import styles from "./Home.module.scss"
import background from "../imgs/cacoPhoto.png"
import Section from './Section'
import Functionalities from './Functionalities'
import Footer from './Footer'
const Home = () => {
  return (
    <main className={styles.ab} id='home'>
        <div className={styles.main}>
          <div className={styles.main__title}>
              <h1>CONOCIMIENTO EN LA PALMA DE TU MANO</h1>
              <h2>Estudia eficientemente con ejercicios seleccionados para ti</h2>
              <button> Más información</button>
          </div>
          <div className={styles.main__bg}>
            <img src={background} alt="modern city" className={styles.main__bg__img}> 
            </img>
          </div>
        </div>
        <Section/>
        <Functionalities/>
        <Footer/>
    </main>

  )
}

export default Home