import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

// @TODO: refactor header
// config [react-headroom](https://github.com/KyleAMathews/react-headroom)
// image container with different image components for logo?

class Header extends Component {

    render() {
        const { location } = this.props;

        let header;

        if (location.pathname === prefixLink('/')) {
            header = (
                <header className="index header">
                    <Headroom className="headroom">
                        <Link className="link" to={prefixLink('/')}>
                            <img className="logo image" src={prefixLink('/logo.png')}/>
                        </Link>
                    </Headroom>
                </header>
            );
        } else {
            header = (
                <header className="header">
                    <Headroom className="headroom">
                        <Link className="link" to={prefixLink('/')}>
                            <img className="logo image" src={prefixLink('/logo.png')}/>
                        </Link>
                    </Headroom>
                </header>
            );
        }

        return header;
    }
}

Header.propTypes = {
    location: PropTypes.object,
    route: PropTypes.object
};

export default Header;