import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Bams and Rants</h1>
      {/* <h4>{data.allMarkdownRemark.totalCount}</h4> */}
    </div>
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
