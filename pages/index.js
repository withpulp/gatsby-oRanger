import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Hero from '../containers/hero';
import Message from '../components/message';
import { config } from 'config';

class Index extends Component {

    render() {
        const { route } = this.props;

        const hero = {
            title: config.siteTitle
        };

        const message = config.siteDescription;

        return (
            <DocumentTitle title={config.siteTitle}>
                <main className="index page">
                    <Hero meta={hero} route={route}/>

                    <section className="about section">
                        <h2 className="title">About</h2>

                        <Message message={message} />
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
