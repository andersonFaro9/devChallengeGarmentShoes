import React from 'react'
import styles from './styles.module.scss'
import { HiArrowLeft } from 'react-icons/hi'
const NavMenu: React.FC = () => (
  <>
    <div className={styles.navmenu}>
      <ul>
        <li>Women</li>
        <li>men</li>
        <li>shoes</li>
        <li className={styles.brand}>brand</li>
      </ul>
    </div>
  </>
)
export default NavMenu
