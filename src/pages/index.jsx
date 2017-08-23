import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Blog from '../containers/blog/';
import SEO from '../components/seo/';
import config from '../../data/SiteConfig';

class Index extends React.Component {
  render() {
    const content = this.props.data.allMarkdownRemark.edges;
    const posts = [];
    const hero = {
      type: 'index',
      title: config.siteTitle,
      caption: config.siteDescription
    };

    // @TODO: filter out post types through graphQL
    content.forEach((item) => {
      if (_.includes(item.node.frontmatter.type, 'post')) {
        posts.push(item);
      }
    });

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
          type
          category
          tags
          date
        }
      }
    }
  }
}
`;
