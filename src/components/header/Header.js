import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Union from "../../images/svg/Union1.inline.svg"
import MyComponent from "./MyComponent"

const Header = () => (
  <header className="">
    <Navbar />
    <MyComponent />
    {/* <Union className="w-full h-52"/> */}
    {/* <Hero /> */}
  </header>
)

export default Header
