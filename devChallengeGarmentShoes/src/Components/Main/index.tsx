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
      <p className={styles.prev}>
        {' '}
        <p className={styles.title}>
          <HiArrowNarrowLeft />
          PREV
        </p>
      </p>
    </div>
  </>
)

export default Main
