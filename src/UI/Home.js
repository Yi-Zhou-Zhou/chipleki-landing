import React from 'react'
import styles from "./Home.module.scss"
import background from "../imgs/a.jpg"
const Home = () => {
  return (
    <main>
        <div className={styles.main}>
          <div className={styles.main__title}>
              <h1>What is Lorem Ipsum?</h1>
              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </h2>
          </div>
          <div className={styles.main__bg}>
          </div>
        </div>

    </main>
  )
}

export default Home