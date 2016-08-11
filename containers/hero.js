import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import include from 'underscore.string/include';
import { prefixLink } from 'gatsby-helpers';

class Hero extends Component {
    render() {
        const { meta, route } = this.props;
        const page = route.page;

        let hero;

        if (page.path === prefixLink('/')) {
            hero = (
                <section className="index hero section">
                    <h1 className="title">{meta.title}</h1>
                </section>
            );
        } else if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
            hero = (
                <section className="hero section">
                    <h2 className="title">{meta.title}</h2>
                </section>
            );
        } else {
            hero = null;
        }

        return hero;
    }
}

Hero.propTypes = {
    meta: PropTypes.object,
    route: PropTypes.object
};

export default Hero;