import React from 'react';
import './index.css';

// @TODO: add icons (font awesome)
class SocialLinks extends React.Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a className="button"
         key={link.label}
         href={link.url}
         target="_blank">
        {labeled ? link.label : ''}
      </a>
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
