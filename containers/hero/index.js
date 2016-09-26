import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { rhythm } from 'utils/typography';

import 'containers/hero/index.css';

const style = {
  hero: {
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
  title: {
    margin: '0 auto',
    color: '#e76600',
    fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    transition: 'opacity 500ms ease'
  },
  meta: {
		display: 'block',
		color: '#777',
		fontSize: '50%'
	}
};

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolling: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // @TODO: reduce opacity of title to 0 as scrolling down to bottom of hero
    // no jquery, try to do this with js only
    let scrollTop = event.srcElement.body.scrollTop;

    // console.log(scrollTop);
    // console.log(itemTranslate);
    // @TODO: need a way to select the title from react virtual dom
    // and change it's opacity as scrollTop reaches a certain value (300, 400, etc)
    // can use state or ref - which one is more effective?
    // https://facebook.github.io/react/docs/more-about-refs.html
    // https://medium.com/react-tutorials/react-state-14a6d4f736f5#.rzm8mx92f
    // http://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js
  }

  render() {
    const { meta, route } = this.props;
    const page = route.page;

    let hero;

    if (page.path === prefixLink('/')) {
      hero = (
        <section className="index hero section" style={style.hero}>
          <h1 className="title" style={style.title}>
            {config.siteTitle}
            <small className="sub description">
              {config.siteDescription}
            </small>
          </h1>
        </section>
      );
    } else if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
      hero = (
        <section className="markdown hero section" style={style.hero}>
          <h2 className="title" style={style.title}>
            {meta.title}
            <small className="sub meta date" style={style.meta}>
              {meta.date}
            </small>
          </h2>
        </section>
      );
    } else {
      hero = (
        <section className="hero section" style={style.hero}>
          <h2 className="title" style={style.title}>
            {meta.title}
          </h2>
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