import * as React from "react"
import Header from '../components/Header'
import Head from '../components/Head'
// import Notification from '../components/Notification'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/styles.scss'

const Layout = ({pageTitle, children, sidebarLinks, activeHeaderLink}) => 
  <div className='Layout'>
    <Head pageTitle={pageTitle} />
    <Header activeLink={activeHeaderLink}/>
    {/* <Notification /> */}
    <div className='middle'>
      <div className='container'>
        {sidebarLinks ? <Sidebar links={sidebarLinks} pageTitle={pageTitle}/> : null}
        <main>
          {children}
        </main>
      </div>
    </div>
    <Footer />
  </div>

export default Layout
