import React from 'react'
import styles from './styles.module.scss'
import { HiArrowLeft } from 'react-icons/hi'
const NavMenu: React.FC = () => (
  <>
    {/* Precisa criar os a href no menu do li */}
    <div className={styles.navmenu}>
      <ul>
        <li>
          <a href='#'>Women</a>
        </li>
        <li>
          <a href='#'>men</a>
        </li>
        <li>
          <a href='#'>shoes</a>
        </li>
        <li className={styles.brand}>
          <a href='#'>brand</a>
        </li>
      </ul>
    </div>
  </>
)
export default NavMenu
