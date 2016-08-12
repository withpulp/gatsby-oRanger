import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Hero from '../containers/hero';
import Message from '../components/message';
import { rhythm } from 'utils/typography';
import { config } from 'config';

const style = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        margin: '0 auto',
        padding: 0
    },
    section: {
        minHeight: '25vh',
        padding: rhythm(1 / 2)
    },
    title: {

    }
};

class Index extends Component {

    render() {
        const { route } = this.props;

        const hero = {
            title: config.siteTitle
        };

        const message = config.siteDescription;

        return (
            <DocumentTitle title={config.siteTitle}>
                <main className="index page" style={style.page}>
                    <Hero meta={hero} route={route}/>

                    <section className="title section" style={style.section}>
                        <h2 className="title" style={style.title}>Hello World</h2>

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
