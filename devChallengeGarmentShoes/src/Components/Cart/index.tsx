import React from 'react'
import styles from './styles.module.scss'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgMathMinus } from 'react-icons/cg'
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
      <div className={styles.sizeCart}>
        <a className={styles.letterS} href='#'>
          <p>S</p>
        </a>
        <a className={styles.letterM} href='#'>
          <p>M</p>
        </a>
        <a className={styles.letterL} href='#'>
          <p>L</p>
        </a>
      </div>
      <div className={styles.add}>
        <CgMathMinus />
        1
        <AiOutlinePlus />
      </div>
      <div className={styles.addCart}>
        <a className={styles.link} href='#'>
          ADD TO CART
        </a>
      </div>
    </div>
  </>
)
export default Cart
