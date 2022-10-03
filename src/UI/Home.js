import React from 'react'
import styles from "./Home.module.scss"
import Section from './Section'
import Functionalities from './Functionalities'
import Footer from './Footer'
import {Link as LinkS} from "react-scroll"
import { Fade } from 'react-awesome-reveal'
import News from './News'
const Home = () => {
  return (
    <main  id='home'>
      <Fade delay={200} triggerOnce>
        <div className={styles.main}>
          <div className={styles.main__title}>
              <h1>Conocimiento en la palma de tu mano</h1>
              <h2>Estudia eficientemente con ejercicios seleccionados para ti</h2>
              <LinkS className={styles.nav__item} to="info" spy={true} smooth={true} offset={-60} duration={500}>
                <div className={styles.btn}>
                   <button> Mas información</button>
                </div>
            </LinkS>
          </div>

        </div>
        </Fade>
        <Section/>
        <Functionalities/>
        <News />
        <Footer/>
    </main>

  )
}

export default Home