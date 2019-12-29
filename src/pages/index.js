import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          } 
          html
        }
      }
      totalCount
    }
  }
`
