import React from 'react'
import styles from "./Home.module.scss"
import Section from './Section'
import Functionalities from './Functionalities'
import Footer from './Footer'
import {Link as LinkS} from "react-scroll"
import About from './About'

const Home = () => {
  return (
    <main  id='home'>
        <div className={styles.main}>
          <div className={styles.main__title}>
              <h1>Conocimiento en la palma de tus manos</h1>
              <h2>Estudia eficientemente con ejercicios seleccionados para ti</h2>
              <LinkS className={styles.nav__item} to="info" spy={true} smooth={true} offset={-60} duration={500}>
                <div className={styles.btn}>
                   <button> Más información</button>
                </div>
            </LinkS>
          </div>

        </div>
        <Section/>
        <Functionalities/>
        <Footer/>
    </main>

  )
}

export default Home