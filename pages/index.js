import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import include from 'underscore.string/include';
import moment from 'moment';
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

        // @TODO: move this logic into a posts container

        const postsList = [];
        // Sort post links.
        const sortedPosts = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse();

        sortedPosts.forEach((post) => {
            if (access(post, 'file.ext') === 'md' && !include(post.path, '/404')) {
                const title = access(post, 'data.title') || post.path;

                postsList.push(
                    // @TODO: create post item component
                    <li className="post item" key={post.path} style={style.post}>

                        <Link className="post link" style={style.Link} to={prefixLink(post.path)}>
                            <h4 className="title" style={style.title}>
                                {title}
                                <small className="meta date" style={style.meta}>
                                    {moment(post.data.date).calendar()}
                                </small>
                            </h4>
                        </Link>
                    </li>
                )
            }
        });

        return (
            <DocumentTitle title={config.siteTitle}>
                <main className="index page" style={style.page}>
                    <Hero meta={hero} route={route}/>

                    <section className="blog section" style={style.section}>
                        <h2 className="title" style={style.title}>Markdown Blog</h2>

                        <ul className="posts list" style={style.posts}>
                            {postsList}
                        </ul>
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
