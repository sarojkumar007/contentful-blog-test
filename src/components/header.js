import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import BaseStyles from "../styles/base.module.scss"

export default () =>{
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)
  return(
    <header className={BaseStyles.header}>
      <h1 className={BaseStyles.brand}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <ul className={BaseStyles.nav}>
        <li className={BaseStyles.navItem}>
          <Link to="/" activeClassName={BaseStyles.active}>Home</Link>
        </li>
        <li className={BaseStyles.navItem}>
          <Link to="/blog" activeClassName={BaseStyles.active}>Blog</Link>
        </li>
        <li className={BaseStyles.navItem}>
          <Link to="/about" activeClassName={BaseStyles.active}>About</Link>
        </li>
        <li className={BaseStyles.navItem}>
          <Link to="/contact" activeClassName={BaseStyles.active}>Contact</Link>
        </li>
      </ul>
    </header>
  )
}

