import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';
import { config } from '../config';
import Message from '../components/message';

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

const copyrightMeta = {
  copyright: moment().year()
};

const copyrightMessage = config.copyrightMessage;

class Footer extends Component {

  render() {
    const { location } = this.props;

    let footer;

    if (location.pathname === prefixLink('/')) {
      footer = (
        <footer className="index footer" style={style.footer}>
          <h6 className="title" style={style.title}>VERSION: {config.siteVersion}</h6>
          <Message message={copyrightMessage} meta={copyrightMeta} />
        </footer>
      );
    } else {
      footer = (
        <footer className="footer" style={style.footer}>
          <Message message={copyrightMessage} meta={copyrightMeta} />
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
