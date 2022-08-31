import React from 'react'
import styles from "./Home.module.scss"
import background from "../imgs/background2.png"
import Section from './Section'
import Functionalities from './Functionalities'
import Footer from './Footer'
const Home = () => {
  return (
    <main className={styles.ab} id='home'>
        <div className={styles.main}>
          <div className={styles.main__title}>
              <h1>What is Lorem Ipsum?</h1>
              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </h2>
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