import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteIcon, siteBlog, siteAbout, siteSocial }) => (
  <header
    style={{
      borderBottom: `2px solid grey`,
      margin: `3rem`
    }}
  >
    <nav>
    <div
      style={{
        display:`flex`,
        margin: `1rem auto`,
        width:`100%`,
        justifyContent: `space-between`,
      }}
    >
      <h2
       style={{ 
         margin: 0 ,
         justifyContent:`flex-start`
                }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <h2
      style={{ 
        margin: 0,
        justifyContent:`flex-end`
      }}>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteIcon}
        </Link>
      </h2>
    </div>
    
    <div 
      style={{

          width: `100%`,
          display: `flex`,
          justifyContent: `space-between`,
          marginBottom:` 25px`
        }}
      
    >
       <h2
       style={{ 
         margin: `1rem 0`,
         justifyContent:`flex-start`
                }}>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteBlog}
        </Link>
      </h2>
      <h2
       style={{ 
         margin: `1rem 0`,
         justifyContent:`flex-start`
                }}>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteAbout}
        </Link>
      </h2>
      <div
       style={{
        height: `100%`,
        width: `50%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-end`,
        marginBottom:` 25px`
      }}
      >
      <h2
      style={{ 
        margin: `1rem`,
        justifyContent:`flex-end`
      }}>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteIcon}
        </Link>
      </h2>
      <h2
      style={{ 
        margin: 0,
        justifyContent:`flex-end`
      }}>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteIcon}
        </Link>
      </h2>
    </div>
    </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteIcon: PropTypes.string,
  siteBlog: PropTypes.string,
 siteAbout: PropTypes.string,
 siteSocial: PropTypes.string,




}

Header.defaultProps = {
  siteTitle: ``,
  siteIcon:``,
  siteBlog: ``,
  siteAbout:``,
  siteSocial:``
}

export default Header
