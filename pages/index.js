import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Hero from 'containers/hero';
import Posts from 'containers/posts';
import social from 'constants/social';
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
        const posts = {
          type: 'featured',
          pages: route.pages
        }

        // @TODO: move this logic into a container
        // create universal figure container - see message component for details

        const socialLinks = []
        const socialPrint = social.forEach((social) => {
            socialLinks.push(
              <li key={social.link} className="social item">
                <a className="social link" target="_blank" href={social.link}>
                  {social.name}
                </a>
              </li>
            )
        });

        return (
            <DocumentTitle title={config.siteTitle}>
                <main className="index page" style={style.page}>
                    <Hero meta={hero} route={route}/>

                    <section className="blog section" style={style.section}>
                      <h2 className="title" style={style.title}>Markdown Blog</h2>

                      <Posts meta={posts} />
                    </section>

                    <section className="social section">
                      <ul className="social list">
                        {socialLinks}
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
