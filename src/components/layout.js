import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.css"
import BaseStyles from "../styles/base.module.scss"

export default (props) =>(
  <>
    <Header />
    <div className={BaseStyles.container}>
    {props.children}
    </div>
    <Footer />
  </>
)
