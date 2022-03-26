import React from 'react'
import styles from './styles.module.scss'
import { HiArrowNarrowLeft } from 'react-icons/hi'
const Main: React.FC = () => (
  <>
    <div className={styles.main}>
      <h2>
        Brand <br /> Sweatshirt
      </h2>

      <p className={styles.money}>$1000</p>
      <a href='#' className={styles.prev}>
        <span className={styles.arrowNext}>
          <HiArrowNarrowLeft />
          PREV
        </span>
      </a>
    </div>
  </>
)

export default Main
