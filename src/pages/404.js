import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import Head from "../components/head"

export default () => {
  return(
    <Layout>
      <Head title="404 Error" />
      <h1>404 Error</h1>
      <p>Oops! The pages you are looking for is not Found</p>
      <p><Link to="/">Go Home</Link></p>
    </Layout>
  )
}
