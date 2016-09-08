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
  }
};

class Project extends Component {
	render () {
		const { meta } = this.props;

		return (
			<li className="project item" style={style.project}>
				<Link className="project link" to={prefixLink(meta.path)}>
					<h4 className="title">
						{meta.data.title}
						<small className="meta date">
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
