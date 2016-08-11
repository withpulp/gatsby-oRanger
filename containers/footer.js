import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';
import { config } from '../config';
import Message from '../components/message';

// @TODO: subscribe container (form component)

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
                <footer className="index footer">
                    <Message message={copyrightMessage} meta={copyrightMeta} />
                </footer>
            );
        } else {
            footer = (
                <footer className="footer">
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