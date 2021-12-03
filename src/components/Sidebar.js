import * as React from "react"
import { Link } from 'gatsby'

const Sidebar = ({links, pageTitle}) =>
  <aside>
      {
        links.map(link => 
            <React.Fragment key={link.url}><Link key={link.url} to={link.url} className={link.text === pageTitle ? 'active' : "inactive"}>{link.text}</Link><hr /></React.Fragment>)
      }
  </aside>

export default Sidebar
