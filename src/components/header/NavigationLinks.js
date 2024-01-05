import React from "react"
import { Link } from "gatsby"

const NavigationLinks = ({ handleNavLinkClick, classN }) => {
  return (
    <div
      className={classN}
      id="navbar-sticky"
    >
      <ul className="text-lg flex flex-col p-4 md:p-0 mt-4 font-semibold bg-transparent space-y-4 md:space-y-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 mr-4">
        <li>
          <Link to="/" onClick={e => handleNavLinkClick(e, null)} activeClassName="bg-royal-blue bg-opacity-50 py-1 px-2 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={e => handleNavLinkClick(e, "faqs")}>
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/location" activeClassName="bg-royal-blue bg-opacity-50 py-1 px-2 rounded">Location</Link >
        </li>
        {/* <li>
          <Link to="/blogs">Blog</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default NavigationLinks
