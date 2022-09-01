import React from 'react'
import styles from "./Home.module.scss"
import background from "../imgs/cacoPhoto.png"
import Section from './Section'
import Functionalities from './Functionalities'
import Footer from './Footer'
import {Link as LinkS} from "react-scroll"
const Home = () => {
  return (
    <main  id='home'>
        <div className={styles.main}>
          <div className={styles.main__title}>
              <h1>CONOCIMIENTO EN LA PALMA DE TU MANO</h1>
              <h2>Estudia eficientemente con ejercicios seleccionados para ti</h2>
              <LinkS className={styles.nav__item} to="info" spy={true} smooth={true} offset={-60} duration={500}>
              <button> Más información</button>

            </LinkS>
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