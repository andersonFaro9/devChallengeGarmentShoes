import React from 'react'
import styles from './styles.module.scss'
// import bag1 from '../../assets/bag1.svg'
import { BsFillBagFill } from 'react-icons/bs'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Header: React.FC = () => (
  <>
    <div className={styles.header}>
      <p>SHOP</p>
      <ul>
        <li className={styles.account}>
          <a href='#'>My Account</a>
        </li>
        <li className={styles.account}>
          <a href='#'>Search</a>
        </li>
        <li className={styles.togheter}>
          <a href='#'>
            <BsFillBagFill />
          </a>
        </li>
        <li className={styles.togheter}>
          <a href='#'>
            {' '}
            <HiOutlineMenuAlt3 />{' '}
          </a>
        </li>
      </ul>
    </div>
  </>
)
export default Header
