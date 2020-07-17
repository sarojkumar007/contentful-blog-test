import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import BaseStyles from "../styles/base.module.scss"

export default () =>{
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
  `)
  return(
  <footer className={BaseStyles.footer}>
    Copyrights - 2020. {data.site.siteMetadata.author}
  </footer>
)}
