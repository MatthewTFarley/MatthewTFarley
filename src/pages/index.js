import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Matthew T Farley"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `personal`,
            `portfolio`,
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
          ]}
        />
        <h2>
          Hey!&nbsp;
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>Welcome to my personal website!</p>
        <p>This site is under construction. Check back for updates!</p>
        <p>- Matt</p>
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
