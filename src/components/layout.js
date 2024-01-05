import * as React from "react"
import Footer from "./Footer/Footer"
import Navbar from "./header/Navbar"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <header><Navbar /></header>
      <main>{children}</main>
      <footer><Footer /></footer>
    </>
  )
}

export default Layout
