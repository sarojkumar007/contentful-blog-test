const path = require('path')

// To generate slug for MD files

// module.exports.onCreateNode = ({node, actions}) => {
// 	const { createNodeField} = actions
// 	if(node.internal.type === "MarkdownRemark"){
// 		const slug = path.basename(node.fileAbsolutePath, '.md') // Generate slug from file abs path
// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: slug
// 		})
// 	}
// }

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogTemplate = 	path.resolve("./src/templates/blog.js")
	const res = await graphql(`
		query{
			allContentfulBlogPost{
		    edges{
		      node{
		        slug
		      }
		    }
		  }
		}
	`)
	res.data.allContentfulBlogPost.edges.forEach(e =>{
		createPage({
			component: blogTemplate,
			path: `/blog/${e.node.slug}`,
			context: {
				slug: e.node.slug
			}
		})
	})
}
