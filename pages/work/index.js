import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Hero from 'containers/hero';
import Message from 'components/message';
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

class WorkIndex extends Component {

    render() {
        const { route } = this.props;

        const hero = {
            title: `${config.siteTitle} | Work`
        };

        return (
            <DocumentTitle title={hero.title}>
                <main className="work page" style={style.page}>
                    <Hero meta={hero} route={route}/>

                    <section className="projects section" style={style.section}>
                        <h2 className="title" style={style.title}>Projects List</h2>

                        <ul className="projects list" style={style.projects}>
                            <li className="project item">project item</li>
                        </ul>
                    </section>
                </main>
            </DocumentTitle>
        );
    }
}

WorkIndex.propTypes = {
    route: PropTypes.object
};

export default WorkIndex;
