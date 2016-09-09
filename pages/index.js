import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Hero from 'containers/hero';
import Projects from 'containers/projects';
import Posts from 'containers/posts';
import social from 'constants/social';
import { rhythm } from 'utils/typography';
import { config } from 'config';

const style = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    padding: 0,
    paddingBottom: rhythm(2)
  },
  section: {
    minHeight: '25vh',
    padding: rhythm(1 / 2)
  },
  title: {
  }
};

class Index extends Component {
  render() {
    const { route } = this.props;
    const hero = {
      title: config.siteTitle
    };
    const projects = {
      type: 'featured',
      pages: route.pages
    }
    const posts = {
      type: 'featured',
      pages: route.pages
    };

    return (
      <DocumentTitle title={config.siteTitle}>
        <main className="index page" style={style.page}>
          <Hero meta={hero} route={route}/>

          <section className="work section" style={style.section}>
            <h2 className="title" style={style.title}>Work</h2>
            <Projects meta={projects} />
          </section>

          <section className="blog section" style={style.section}>
            <h2 className="title" style={style.title}>Blog</h2>
            <Posts meta={posts} />
          </section>
        </main>
      </DocumentTitle>
    );
  }
}

Index.propTypes = {
  route: PropTypes.object
};

export default Index;
