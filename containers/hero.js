import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';

// @TODO: inject css like typography
// that way can avoid duplicate classes like these

const style = {
  indexHero: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    padding: rhythm(1 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  indexTitle: {
    margin: '0 auto',
    color: '#e76600',
    fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
  },
  hero: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '25vh',
    margin: '0 auto',
    padding: rhythm(1 / 2)
  },
  title: {
    margin: '0 auto'
  }
};

class Hero extends Component {
  render() {
    const { meta, route } = this.props;
    const page = route.page;

    let hero;

    if (page.path === prefixLink('/')) {
      hero = (
        <section className="index hero section" style={style.indexHero}>
          <h1 className="title" style={style.indexTitle}>{meta.title}</h1>
        </section>
      );
    } else if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
      hero = (
        <section className="hero section" style={style.hero}>
          <h2 className="title" style={style.title}>{meta.title}</h2>
        </section>
      );
    } else {
      hero = (
        <section className="hero section" style={style.hero}>
          <h2 className="title" style={style.title}>{meta.title}</h2>
        </section>
      );
    }

    return hero;
  }
}

Hero.propTypes = {
  meta: PropTypes.object,
  route: PropTypes.object
};

export default Hero;
