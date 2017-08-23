import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import Markdown from '../containers/markdown';
import config from '../../data/SiteConfig';

class AboutIndex extends React.Component {
  render() {
    const content = this.props.data.allMarkdownRemark.edges;
    const hero = {
      type: 'index',
      title: 'What is this?',
      caption: 'A Gatsby Starter for Ants!'
    };

    // @TODO: get only about page data
    // from content/pages/about.md
    // using graphql schema
    let about;
    content.forEach((item) => {
      if (_.includes(item.node.frontmatter.type, 'page') && item.node.frontmatter.title === 'About') {
        about = item;
      }
    });

    return (
      <div className="about page">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero data={hero} />
        <Markdown data={about} />
      </div>
    );
  }
}

export default AboutIndex;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query AboutQuery {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
          type
        }
      }
    }
  }
}
`;
