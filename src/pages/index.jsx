import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import SEO from '../components/seo/';
import config from '../../data/SiteConfig';

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const hero = {
      type: 'index',
      title: config.siteTitle,
      caption: config.siteDescription
    };
    
    return (
      <div className="index page">
        <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
        <SEO postEdges={posts} />
        <Hero data={hero} />
        <Blog posts={posts} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
  allMarkdownRemark(
    limit: 2000,
    sort: { fields: [frontmatter___date], order: DESC },
  ) {
    edges {
      node {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          title
          category
          tags
          date
        }
      }
    }
  }
}
`;
