import React, { Component, PropTypes } from 'react';

import Header from '../containers/header';
import Footer from '../containers/footer';

class Template extends Component {
    render () {
        const { location, route, children } = this.props;

        return (
            <main className="main template">
                <Header location={location} route={route} />
                <section className="main content">
                    {children}
                </section>
                <Footer location={location} route={route} />
            </main>
        );
    }
}

Template.propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    route: PropTypes.object
};

export default Template;
