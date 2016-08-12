import React, { Component, PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';

// @TODO: refactor header
// config [react-headroom](https://github.com/KyleAMathews/react-headroom)
// fix: wrapper height comes renders as 25px (hardcoding image height/width as temp fix)
// image container with different image components for logo?

const style = {
    header: {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        margin: '0 auto',
        padding: rhythm(1 / 2),
        zIndex: 3
    },
    wrapper: {
        position: 'relative',
        width: 'auto',
        height: 'auto !important'
    },
    logo: {
        width: '50px',
        height: '50px',
        margin: 0,
        verticalAlign: 'middle'
    }
};

class Header extends Component {

    render() {
        const { location } = this.props;

        let header;

        if (location.pathname === prefixLink('/')) {
            header = (
                <header className="index header" style={style.header}>
                    <Headroom disableInlineStyles
                              wrapperStyle={style.wrapper}>
                        <Link className="link" to={prefixLink('/')}>
                            <img className="logo image" src={prefixLink('/logo.png')} style={style.logo}/>
                        </Link>
                    </Headroom>
                </header>
            );
        } else {
            header = (
                <header className="header" style={style.header}>
                    <Headroom disableInlineStyles
                              onPin={() => console.log('header pinned')}
                              onUnpin={() => console.log('header unpinned')}
                              wrapperStyle={style.wrapper}
                              style={style.headroom}>
                        <Link className="link" to={prefixLink('/')}>
                            <img className="logo image" src={prefixLink('/logo.png')} style={style.logo}/>
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