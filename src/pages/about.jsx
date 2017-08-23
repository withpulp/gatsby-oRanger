import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../containers/hero/';
import config from '../../data/SiteConfig';

class AboutIndex extends React.Component {
  render() {
    const hero = {
      type: 'index',
      title: 'What is this?',
      caption: 'A Gatsby Starter for Ants!'
    };

    // @TODO: get about page data
    // from content/pages/about.md
    // using graphql
    console.log(this.props.data);

    return (
      <div className="about page">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero data={hero} />

        <section className="about section">
          <figure className="message figure">
            <p className="message">Here men from the planet Earth first set foot upon the Moon. July 1969 AD. We came in peace for all mankind. If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon. NASA is not about the ‘Adventure of Human Space Exploration’…We won’t be doing it just to get out there in space – we’ll be doing it because the things we learn out there will be making life better for a lot of people who won’t be able to go.</p>
          </figure>
        </section>
      </div>
    );
  }
}

export default AboutIndex;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query AboutQuery {
  allMarkdownRemark(
    limit: 1
  ) {
    edges {
      node {
        frontmatter {
          title
          type
        }
      }
    }
  }
}
`;
