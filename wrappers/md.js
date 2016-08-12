import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import moment from 'moment';

import Hero from '../containers/hero';
import { fixLinks } from 'utils';
import { rhythm } from 'utils/typography';
import { config } from 'config';

// @TODO: refactor markdown wrapper
// render different components/pages/containers by route
// reference: https://github.com/campjs/campjs-vii/blob/master/wrappers/md.jsx
// post page container to place inside wrapper?
// should we load different page containers using logic?
// posts and post components?

class MarkdownWrapper extends Component {

    componentDidMount() {
        fixLinks(this.refs.markdown, this.context.router)
    }

    render() {
        const { route } = this.props;
        const data = route.page.data;
        const date = moment(data.date).calendar().toLowerCase();
        const hero = {
            title: data.title,
            date: date,
            image: data.image
        };

        return (
            <DocumentTitle title={data.title ? `${data.siteTitle} | ${data.title}` : config.siteTitle}>
                <main className="markdown wrapper">
                    <Hero meta={hero} route={route}/>

                    <article className="markdown article" ref="markdown" dangerouslySetInnerHTML={{__html: data.body}}/>
                </main>
            </DocumentTitle>
        )
    }

}

MarkdownWrapper.propTypes = {
    route: PropTypes.object
};

MarkdownWrapper.contextTypes = {
    router: PropTypes.object.isRequired
};

export default MarkdownWrapper;
