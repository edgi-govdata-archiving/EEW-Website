import * as React from "react"
import { Link } from 'gatsby'
import { HeaderLinks } from '../helpers/constants'
import HeaderItem from '../components/HeaderItem'
import SiteLogo from "../images/eew-logo.webp"
import '../styles/header.scss'

const Header = ({activeLink}) =>
  <header>
    <div className='container'>
      <Link to="/">
        <img src={SiteLogo} alt="EEW Site Logo" />
      </Link>
      <label>
        <input type='checkbox' />
        <nav>
        <div className='MenuIcon'></div>
        {
          HeaderLinks.map(link => <HeaderItem link={link} activeLink={activeLink} />)
        }
      </nav>
      </label>
    </div>
  </header>

export default Header
