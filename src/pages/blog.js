import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import {Link, graphql, useStaticQuery} from "gatsby"

export default () =>{

  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate ( formatString: "MMMM Do, YYYY" )
        }
      }
    }
  }
  `)
return (
  <Layout>
    <Head title="Blog" />
    <h1>This is my blog page ...</h1>
    <p>Contents will be updated soon ...</p>
    <ul>
      {data.allContentfulBlogPost.edges.map((e,i) =>{
        return(
          <li key={i}>
            <Link to={`/blog/${e.node.slug}`} className="post">
              <h2>{e.node.title}</h2>
              <p>{e.node.publishedDate}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  </Layout>
)
}
