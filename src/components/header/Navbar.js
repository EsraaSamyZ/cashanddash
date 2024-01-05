import React, { useState, useEffect, useRef } from "react"
import { useLocation } from "@reach/router"
import { LogoComponent } from "./LogoComponent"
import { MenuToggleButton } from "./MenuToggleButton"
import { MobileMenu } from "./MobileMenu"
import { DesktopMenu } from "./DesktopMenu"
import ContactUsBtn from "../Shared/ContactUsBtn"
import GetOfferBtn from "../Shared/GetOfferBtn"

const Navbar = () => {
  const location = useLocation()
  const [isTop, setIsTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()
  const toggleButtonRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isMenuOpen])

  const handleNavLinkClick = (e, targetId) => {
    if (location.pathname === "/" && targetId) {
      e.preventDefault()

      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        const offset = 150
        const sectionTop =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          offset

        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        })
      }
    } else if (location.pathname === "/" && !targetId) {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }

    setIsMenuOpen(false)
  }

  const navbarClasses = `bg-dark-gray fixed w-full z-20 top-0 start-0 border-b border-dark-gray ${
    location.pathname === "/" && isTop ? "bg-transparent" : ""
  }`
  const navbarBtnsClasses = `flex items-center pb-0 ${
    location.pathname === "/" && isTop ? "hidden" : ""
  }`

  return (
    <nav className={navbarClasses}>
      <div className="w-4/5 mx-auto flex flex-wrap items-center justify-between py-2">
        <LogoComponent handleNavLinkClick={handleNavLinkClick} />

        <div ref={menuRef}>
          <MobileMenu
            isMenuOpen={isMenuOpen}
            handleNavLinkClick={handleNavLinkClick}
          />
        </div>
        <div ref={toggleButtonRef}>
          <MenuToggleButton
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <DesktopMenu handleNavLinkClick={handleNavLinkClick} />
      </div>
      <div className={navbarBtnsClasses}>
        <ContactUsBtn className="md:hidden w-full text-lg text-royal-blue bg-white hover:text-white hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold text-sm px-5 py-2 text-center" />
        <GetOfferBtn className="md:hidden w-full text-lg text-white bg-deep-crimson hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold text-sm px-5 py-2 text-center flex items-center justify-center" />
      </div>
    </nav>
  )
}

export default Navbar
