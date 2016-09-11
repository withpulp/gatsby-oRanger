import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { prune, include as includes } from 'underscore.string';
import find from 'lodash/find';
import intersect from 'just-intersect';
import Summary from 'components/summary';
import { rhythm, fontSizeToMS } from 'utils/typography';
import { getTags } from 'utils';

const style = {
  figure: {
    position: 'relative',
    margin: `${rhythm(2)} auto`,
    padding: rhythm(1 / 2)
  },
  cta: {
    margin: 0,
    color: '#fff',
    fontSize: fontSizeToMS(-0.5).fontSize,
    lineHeight: fontSizeToMS(-0.5).lineHeight,
    letterSpacing: -0.25
  },
  title: {
    marginTop: 0,
    marginBottom: rhythm(1 / 2)
  }
};

// @TODO: swipe for mobile integrated with router

class Next extends React.Component {
  render() {
    const { pages, data } = this.props;
    let { readNext } = data;
    let next;

    if (readNext) {
      next = find(pages, (page) => includes(page.path, readNext))
    } else {
      readNext = pages
        .filter(p => p.data.tags && p.data.body !== data.body)
        .map(p => {
          if (data.tags) {
            const t = getTags(p);
            p.diff = intersect(data.tags, t).length;
          }
          return p
        })
        .sort((a, b) => a.diff - b.diff)
        .slice(-5)
        .sort((a, b) => Math.random() * -0.5)
        .pop();
      if (readNext) {
        readNext = readNext.path;
        next = find(pages, (page) => includes(page.path, readNext));
      }
    }

    if (!next) {
      return React.createElement('noscript', null)
    } else {
      next = find(pages, (page) => includes(page.path, readNext.slice(1, -1)));

      return (
        <figure className="next figure" style={style.figure}>
          <h6 className="cta" style={style.cta}>
            Here's what's next:
          </h6>

          <h3 className="title" style={style.title}>
            <Link to={{  pathname: prefixLink(next.path)}}>
              {next.data.title}
            </Link>
          </h3>
        </figure>
      )
    }
  }
}

Next.propTypes = {
  data: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
};

export default Next;
