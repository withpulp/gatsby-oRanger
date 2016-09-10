import React, { Component, PropTypes } from 'react';
import social from 'constants/social';
import { rhythm, fontSizeToMS } from 'utils/typography';

const style = {
  copyright: {
		display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
		width: '100%',
		height: 'auto',
		margin: '0 auto'
  },
	social: {
		display: 'block',
		listStyle: 'none',
		margin: '0 auto'
	},
	item: {
		display: 'inline-block',
		margin: `0 ${rhythm(1/2)}`,
		fontSize: fontSizeToMS(-0.5).fontSize
	},
	message: {
		color: '#fff',
    fontSize: fontSizeToMS(-0.5).fontSize,
    textAlign: 'center'
	}
};

class Copyright extends Component {
	render() {
		const { meta } = this.props;

		const socialList = []
    const socialLinks = social.forEach((social) => {
      socialList.push(
        <li key={social.link} className="social item" style={style.item}>
          <a className="social link" target="_blank" href={social.link}>
            {social.name}
          </a>
        </li>
      );
    });

		return (
			<figure className="copyright figure" style={style.copyright}>
				<ul className="social list" style={style.social}>
					{socialList}
				</ul>
				<p className="caption message" style={style.message}>&copy;{meta.year}, <span dangerouslySetInnerHTML={{__html: meta.message}}/></p>
			</figure>
		);
	}
};

Copyright.propTypes = {
  meta: PropTypes.object
};

export default Copyright;
