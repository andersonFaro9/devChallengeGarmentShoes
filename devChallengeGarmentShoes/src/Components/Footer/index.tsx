import React from 'react'
import styles from './styles.module.scss'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const Footer: React.FC = () => (
  <>
    <div className={styles.footer}>
      <ul>
        <li>
          <AiOutlineInstagram />
        </li>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FiTwitter />
        </li>
      </ul>
    </div>
  </>
)

export default Footer
