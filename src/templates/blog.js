import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import BlogStyles from "../styles/blog.module.scss"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// export const query = graphql`
// 	query(
// 		$slug: String
// 	){
// 		markdownRemark (
// 			fields: {
// 				slug: {
// 					eq: $slug
// 				}
// 			}
// 		){
// 			frontmatter{
// 				title
// 				date
// 			}
// 			html
// 		}
// 	}
// `

export const query = graphql`
	query($slug: String){
		contentfulBlogPost(slug: {eq: $slug}){
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body{
				json
			}
		}
	}
`
export default (props) =>{
	const options = {
		renderNode:{
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const url = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={url} />
			}
		}
	}

	return(
		<Layout>
			<Head title={props.data.contentfulBlogPost.title} />
			<h1 className={BlogStyles.title}>{props.data.contentfulBlogPost.title}</h1>
			<p className={BlogStyles.meta}>PUBLISHED ON: {props.data.contentfulBlogPost.publishedDate}</p>
			<div className={BlogStyles.str}>
			{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
			</div>
		</Layout>
	)
}
