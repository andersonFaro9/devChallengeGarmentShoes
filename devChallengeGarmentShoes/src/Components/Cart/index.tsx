import React from 'react'
import styles from './styles.module.scss'
import { HiArrowNarrowRight } from 'react-icons/hi'
const Cart: React.FC = () => (
  <>
    <div className={styles.cart}>
      <a href='#' className={styles.next}>
        <p className={styles.arrow}>
          <span>Next</span>
        </p>
        <span className={styles.arrowNext}>
          <HiArrowNarrowRight />
        </span>
      </a>
    </div>
  </>
)
export default Cart
