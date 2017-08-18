import React from 'react';
import './index.css';

// @TODO: add icons (font awesome)
class SocialLinks extends React.Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <button className="button"
              key={link.label}
              href={link.url}>
        {labeled ? link.label : ''}
      </button>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <figure className="user links figure">
        { this.getLinkElements() }
      </figure>
    );
  }
}

export default SocialLinks;