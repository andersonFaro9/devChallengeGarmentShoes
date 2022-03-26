import { useState } from 'react'
import Header from './Components/Header'
import NavMenu from './Components/NavMenu'
import Main from './Components/Main'
import Cart from './Components/Cart'

import Footer from './Components/Footer'

import styles from './global.module.scss'
function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />

        <NavMenu />
        <Main />
        <Cart />
        <Footer />
      </div>
    </>
  )
}

export default App
