import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer/Footer"
import "./layout.css"
import Navbar from "./Header/Navbar"

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
