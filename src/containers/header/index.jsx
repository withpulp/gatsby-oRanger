import React, { Component } from 'react';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="link"
              to="/">
          <img className="logo image" src={config.siteLogo} />
        </Link>
      </header>
    )
  }
}

export default Header;
