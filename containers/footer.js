import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import include from 'underscore.string/include';
import find from 'lodash/find';
import Copyright from 'containers/copyright';
import Next from 'containers/next/';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

// @TODO: subscribe container (form component)

const style = {
  footer: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '100vh',
    zIndex: 1,
    backgroundColor: '#3f324d',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  title: {
    margin: '0 auto',
    color: '#e76600',
    textAlign: 'center'
  }
};

class Footer extends Component {
  render() {
    const { location, route } = this.props;
    const copyright = {
      year: moment().year(),
      message: config.copyrightMessage
    };

    let footer;

    if (location.pathname === prefixLink('/')) {
      footer = (
        <footer className="index footer" style={style.footer}>
          <h6 className="title" style={style.title}>VERSION: {config.siteVersion}</h6>
          <Copyright meta={copyright} />
        </footer>
      );
    } else if (include(location.pathname, '/blog/') || include(location.pathname, '/work/')) {
      const page = find(route.pages, { 'path': location.pathname});

      footer = (
        <footer className="index footer" style={style.footer}>
          <Next data={page.data} pages={route.pages}/>
          <Copyright meta={copyright} />
        </footer>
      );
    } else {
      footer = (
        <footer className="footer" style={style.footer}>
          <Copyright meta={copyright} />
        </footer>
      );
    }

    return footer;
  }
}

Footer.propTypes = {
  location: PropTypes.object,
  route: PropTypes.object
};

export default Footer;
