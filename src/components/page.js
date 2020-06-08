import React from "react"
import { graphql } from "gatsby"
import he from 'he';

import Layout from "./layout"
import SEO from "./seo"

const Page = (props) => {
    const page = props.data.wordpressPage;
    // console.log('page object', page);
    return (
      <Layout>
        <SEO title={page.title} />
        <section className="todo">
            {/* <div className="person-img margin-bottom-xs"></div> */}
            <h1>{he.decode(page.title)}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </section>
      </Layout>
    )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      acf {
        hero_image {
          title
          localFile {
            url
          }
        }
      }
    }
  }
`