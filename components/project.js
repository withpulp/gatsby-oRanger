import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';

const style = {
  project: {
    position: 'relative',
    display: 'block',
    marginBottom: rhythm(1 / 2)
  },
  link: {
		textDecoration: 'none'
	},
	title: {
		transition: 'all 250ms'
	},
	meta: {
		display: 'block',
		color: '#777',
    fontSize: '50%'
	}
};

class Project extends Component {
	render () {
		const { meta } = this.props;

		return (
			<li className="project item" style={style.project}>
				<Link className="project link" to={prefixLink(meta.path)} style={style.link}>
					<h4 className="title" style={style.title}>
						{meta.data.title}
						<small className="meta date" style={style.meta}>
							{moment(meta.data.date).calendar()}
						</small>
					</h4>
				</Link>
			</li>
		);
	}
}

Project.propTypes = {
	meta: PropTypes.object
}

export default Project;
